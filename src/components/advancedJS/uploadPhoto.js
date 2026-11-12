import { supabase } from "../supabaseClient.js";

// Upload a file to Supabase
function UploadFile(file) {
    // States

    // Functions and methods
    {/*Upload file to repair_images bucket in supabase
    @param {} uploadFile - the file being uploaded
    */}
    async function upload(uploadFile) {
        console.log(uploadFile)
        // Upload to repair_images buckets in Supabase with specified file path
        let filepath = uploadFile.name;

        // Upload file with upsert: overwrites the file if it already exists
        const { data, error } = await supabase.storage.from('repair_images').upload(filepath, uploadFile, 
            {cacheControl: '3600', upsert: true}
        )

        if (error) {
            // Handle error
            console.error('Error uploading file: ', error);
            alert('File upload failed'); 
            return; 
        } else {
            // Get URL if file uploads successfully
            const { data: link } = supabase.storage.from('repair_images').getPublicUrl(filepath);
            alert('File uploaded successfully: ' + link.publicUrl);
            console.log('Public url: ', link.publicUrl);
        }
    }

    {/* 
        Upload file when form is submitted
        @param {EventArgs} event - event arguments, used to get uploaded file
    */}
    const handleSubmit = async (event) => {
        event.preventDefault();
        const uploadFile = event.target.fileInput.files[0];

        // Check if a file was uploaded
        if (!uploadFile) {
            alert('Please upload a file');
            return;
        }

        // Upload file to Supabase
        upload(uploadFile);

        // Clear file input
        event.target.reset();
    }

    // UI
    return (
        <div>
            <p>Upload a photo</p>
            <form onSubmit={handleSubmit} className="d-flex flex-column">
                <input type="file" name="fileInput" className="form-control mb-2"></input>
                <div className="col-1">
                    <button type="submit" className="form-control">Upload</button>
                </div>
            </form>
        </div>
    );
}

export default UploadFile;