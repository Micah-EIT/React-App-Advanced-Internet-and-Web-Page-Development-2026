// Imports
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient.js";

// Component function
function PhotoGallery() {
    //States
    const [photos, setPhotos] = useState([]);

    // Functions and methods
    const fetchImages = async () => {
        try {
            const { data, error } = await supabase
            .storage
            .from('repair_images')
            .list();

            // Handle errors
            if (error) throw error;
            setPhotos(data);
        }
        catch (error) {
            console.error('Error fetching bookings:', error.message)
        }
    }

    // Fetch bookings on component mount
    useEffect(() => {
        fetchImages(); 
    }, []);

    // UI
    return (
        <div>
            <h2 className="my-2">Uploaded photos: </h2>
            <div className="d-flex flex-row flex-wrap">
            {photos.map((photo) => {
            return (<img 
                key={photo.filename} 
                src={supabase.storage.from('repair_images').getPublicUrl(photo.name).data.publicUrl}
                className="m-2"/>
            )})}
            </div>
        </div>
    );
}

export default PhotoGallery;