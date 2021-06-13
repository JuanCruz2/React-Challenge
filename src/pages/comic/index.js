import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { ComicDetails } from "./components/comic-details";
import {
    fetchComicDetails
  } from '../../reducers/comicDetails/comicDetailsSlice';

import { useParams } from "react-router-dom";
  
export const ComicPage = () => {
    const dispatch = useDispatch();
    const { comicId } = useParams();

    useEffect(() => {
        dispatch(fetchComicDetails(comicId))
    }, [dispatch, comicId])

    return (
        <div>
            <ComicDetails></ComicDetails>
        </div>
    )
}
