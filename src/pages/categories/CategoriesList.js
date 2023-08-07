import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';

import appStyles from "../../App.module.css"
import Asset from '../../components/Assets';
import Categories from './Categories';



function CategoriesList({message, filter=""}) {
    const [category, setCategory] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const {data} = await axiosReq.get(`/category/${filter}`)
                setCategory(data)
                setHasLoaded(true)
            } catch(err) {
                console.log(err)
            }
        }

        setHasLoaded(false)
        fetchCategory()
    }, [filter, pathname])

  return (
    <Row className='h-100'>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <p>List of Categories mobile</p>
            {hasLoaded ? (
                <>
                {category.results.length ? (
                    category.results.map(category => (
                        <Categories key={category.id} {...category} setCategory={setCategory} />
                    ))
                ) : (
                    <Container className={appStyles.Content}>
                        <Asset message={message} />
                    </Container>
                )}
                </>
            ) : (
                <Container className={appStyles.Content}>
                    <Asset spinner />                     
                    </Container>
            )}
        </Col>
        <Col className='d-none d-lg-block p-0 p-lg-2' md={4}>
            <p>List of Categories desktop</p>
        </Col>
    </Row>
  )
}

export default CategoriesList;