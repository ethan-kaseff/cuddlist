import React, {useState} from 'react'

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);

    const res = await fetch('/api/images', {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      setImageLoading(false);
      setImage('')
      // history.push("/images");
    }
    else {
      setImageLoading(false);
      // a real app would probably use more advanced
      // error handling
      console.log("error");
    }
  }

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  // used creative-tim.com for some styling 
  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="file"
        accept="image/*"
        onChange={updateImage}
      /> */}
      <div>
        <div className="mb-2"> <span>Attachments</span>
          <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
            <div className="absolute">
              <div className="flex flex-col items-center ">
                <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
                <span className="block text-gray-400 font-normal">Attach you files here</span>
                <span className="block text-gray-400 font-normal">or</span>
                <span className="block text-blue-400 font-normal">Browse files</span>
              </div>
            </div>
            <input type="file" className="h-full w-full opacity-0" name="" onChange={updateImage} accept="image/*"></input>
          </div>
          <div className="flex justify-between items-center text-gray-400"> <span>{image && image.name}</span> <span className="flex items-center "><i className="fa fa-lock mr-1"></i> secure</span> </div>
        </div>
      </div>
      <button className={!image ? 'bg-gray-200' : 'bg-blue-200'}
        disabled={!image} type="submit">Submit</button>
      {(imageLoading) && <p>Loading...</p>}
    </form>
  )
}

export default ImageUpload
