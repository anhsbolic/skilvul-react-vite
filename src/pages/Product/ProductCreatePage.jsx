import {useState} from 'react';

const ProductCreatePage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <div className="row w-100">
                <div className="col">
                    <h2>Create New Product</h2>
                </div>
            </div>

            <div className="row w-100 mt-2">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="file">Select image to upload:</label>
                        <input required type="file" accept="image/*" className="form-control-file" id="file"
                               name="file"/>
                        <img id="preview" src="#" alt="Preview"
                             style={{display: "none", maxWidth: "200px", maxHeight: "200px"}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input required type="text" className="form-control" id="name" placeholder="Enter name"
                               name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" placeholder="Enter description"
                                  name="description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input required type="number" className="form-control" id="price" placeholder="Enter price"
                               name="price"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </>
    )
};

export default ProductCreatePage;
