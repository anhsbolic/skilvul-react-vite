import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {postCreateProduct} from "../../services/productService.js";

const ProductCreatePage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        file: null,
        image: null,
    });

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setFormData((prevProps) => ({
                ...prevProps,
                file: event.target.files[0],
                image: URL.createObjectURL(event.target.files[0]),
            }));
        }
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const productData = {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            image: formData.image,
        }
        const resCreateProduct = await postCreateProduct(productData);
        if (resCreateProduct) {
            navigate("/products");
        }
    };

    return (
        <>
            <div className="row w-100">
                <div className="col">
                    <h2>Create New Product</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row w-100 mt-2">
                    <div className="col">
                        <div className="form-group mb-4">
                            <label htmlFor="file" className="mb-2">Select image to upload:</label>
                            <input
                                required
                                id="file"
                                className="form-control-file"
                                type="file"
                                accept="image/*"
                                name="file"
                                onChange={handleFileChange}
                            />
                            {
                                formData.image && formData.image !== "" ?
                                    <img
                                        id="preview"
                                        src={formData.image}
                                        alt="Preview"
                                        style={{maxWidth: "200px", maxHeight: "200px"}}
                                    />
                                    :
                                    null
                            }
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="input-name">Name:</label>
                            <input
                                id="input-name"
                                className="form-control"
                                name="name"
                                type="text"
                                placeholder="Enter name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                className="form-control"
                                name="description"
                                placeholder="Enter description"
                                value={formData.description}
                                onChange={handleInputChange}
                            >
                            </textarea>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="price">Price:</label>
                            <input
                                id="price"
                                className="form-control"
                                name="price"
                                type="number"
                                placeholder="Enter price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
};

export default ProductCreatePage;
