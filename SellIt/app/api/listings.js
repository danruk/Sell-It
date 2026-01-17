import client from './client';

const endpoint ='/listings';
const getListings = () => client.get(endpoint);
const deleteListing = (id) => client.delete(`${endpoint}/${id}`);

export const addListing = async (listing,onUploadProgress) => {

const data =new FormData();
data.append("title",listing.title);
data.append("price",listing.price);
data.append("categoryId",listing.category.value);
data.append("description",listing.description);

listing.images.forEach((image,index) => {
    const name = image.split("/").pop() || `image${index}.jpg`;
    data.append('images',{
        name,
        type:'image/jpeg',
        uri:image,
    });
});

if(listing.location)
data.append("location",JSON.stringify(listing.location));

try {
    const response = await client.axiosInstance.post(endpoint, data, {
        onUploadProgress: (progress) => {
            if (!progress.total) return onUploadProgress(0);
            onUploadProgress(progress.loaded / progress.total);
        },
    });
    return {
        ok: response.status >= 200 && response.status < 300,
        data: response.data,
        status: response.status,
        problem: null,
        originalError: null,
    };
} catch (error) {
    const status = error.response?.status || null;
    const data = error.response?.data || null;
    return {
        ok: false,
        data,
        status,
        problem: error.message || "NETWORK_ERROR",
        originalError: error,
    };
}

};

export default {
    addListing,
    getListings,
    deleteListing,
};
