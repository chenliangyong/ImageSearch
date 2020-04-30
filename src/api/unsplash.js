import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 5b0fd4935f84611dc713c314de4b14bbea6d832bc636c9922b0a0f9d578e750f'
    }
});

