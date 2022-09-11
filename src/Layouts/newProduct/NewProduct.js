import { useEffect, useState } from "react";

// const productsFromLocalStorage = JSON.parse(localStorage.getItem("products") || "[]")

const NewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('Edible');
    const [subCategory, setSubCategory]= useState([])
    const [desc, setDesc] = useState('');
    const [products, setProducts] = useState([]);
    const [image, setImage] = useState(null);
    const [link, setLink] = useState("");
    const edibles = ["Energy", "Gummies", "Infused", "Non-Cannabis", "Top Sellers", "Vegan", "Vitamin", "featured"];
    const topicals = ["Anti-inflammatory", "Pain relief", "featured"];
    const pills = ["CBD Pills", "featured"];
    const tinctures = ["featured"];

    useEffect(()=> {
        // console.log("products inside: ", products);
        console.log(subCategory);
    }, [products, subCategory])


    const handleSubmit = (e)=> {
        e.preventDefault();

        const productObj = {
            name, image, category, subCategory, price, link, desc
        };

        console.log(productObj);
        fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(productObj)
        }).then( ()=> {
            console.log(productObj);
        })

        setProducts([...products, productObj])
        setName('');
        setCategory('Edible');
        setSubCategory('');
        setPrice(0);
        setLink('');
        setDesc('');
    }

    const handleCheckbox = event => {
        console.log("checked");
        setSubCategory([...subCategory, event.target.value]);
        if(subCategory.includes(event.target.value))
            setSubCategory(subCategory.filter(item=> item !== event.target.value));
    }

    const imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
        setImage(base64);
          console.debug("file stored",base64);
        });
    };

    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }
    return (  
        <div className="newProduct">
            <h2>Add New Product</h2>
            <input type="checkbox" />
            <form onSubmit={handleSubmit}>
                <label>Product Name: </label>
                <input type="text"
                    required
                    value={name}
                    onChange={ (e)=> setName(e.target.value) }
                />

                <label >Choose a Photo: </label>
                <input type="file"
                    required
                    className="file"
                    id="file"
                    accept="image/*"
                    onChange={ imageUpload }
                />

                <label>Category: </label>
                <select
                    className='prod-category'
                    value={category}
                    onChange={ (e)=> setCategory(e.target.value)}
                >
                    <option value="Edible">Edible</option>
                    <option value="Topicals">Topicals</option>
                    <option value="CBD-Tinctures">CBD Tinctures</option>
                    <option value="Pills">Pills</option>
                </select>

                {(category === 'Edible') && 
                    <>
                    <label>Sub-category: </label>
                    
                    <div className="sub-categories">
                        {edibles.map(product => (
                            <div className="checkboxes" key={product}>
                                <input type="checkbox"  name="sub-cat" value={product} className="checkbox" onChange={handleCheckbox}/>
                                <label htmlFor={product} >{product}</label>
                            </div>
                        ))}
                    </div>
                    </>
                }
                
                {(category === 'Topicals') && 
                <>
                    <label>Sub-category: </label>

                    <div className="sub-categories">
                        {topicals.map(product => (
                            <div className="checkboxes" key={product}>
                                <input type="checkbox"  name="sub-cat" value={product} className="checkbox" onChange={handleCheckbox}/>
                                <label htmlFor={product} >{product}</label>
                            </div>
                        ))}
                    </div>
                </>
                }
                
                {(category === 'CBD-Tinctures') && 
                <>
                    <label>Sub-category: </label>

                    <div className="sub-categories">
                        {tinctures.map(product => (
                            <div className="checkboxes" key={product}>
                                <input type="checkbox"  name="sub-cat" value={product} className="checkbox" onChange={handleCheckbox}/>
                                <label htmlFor={product} >{product}</label>
                            </div>
                        ))}
                    </div>
                </>
                }

                {(category === 'Pills') && 
                <>
                    <label>Sub-category: </label>

                    <div className="sub-categories">
                        {pills.map(product => (
                            <div className="checkboxes" key={product}>
                                <input type="checkbox"  name="sub-cat" value={product} className="checkbox" onChange={handleCheckbox}/>
                                <label htmlFor={product} >{product}</label>
                            </div>
                        ))}
                    </div>
                </>
                }

                <label>Price: </label>
                <input type="number"
                    required
                    value={price}
                    onChange={ (e)=> setPrice(e.target.value) }
                />

                <label>Link: </label>
                <input type="text"
                    value={link}
                    onChange={ (e)=> setLink(e.target.value) }
                />

                <label>Description: </label>
                <textarea type="text"
                    required
                    value={desc}
                    onChange={ (e)=> setDesc(e.target.value) }
                />
                <div></div>

                <button className="submit">Submit</button>
            </form>
            <br />
        </div>
    );
    
}
 
export default NewProduct;