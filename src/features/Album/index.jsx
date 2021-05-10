import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'hinh 1',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/1/4/c/914cea6dff1e9d5072c2cf32be64e299.jpg',
        },
        {
            id: 2,
            name: 'hinh 2',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/1/4/c/914cea6dff1e9d5072c2cf32be64e299.jpg',
        },
        {
            id: 3,
            name: 'hinh 3',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/1/4/c/914cea6dff1e9d5072c2cf32be64e299.jpg',
        },

    ];
    return (
        <div>
            <h2>Danh sách bài hát</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;