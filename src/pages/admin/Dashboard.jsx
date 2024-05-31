import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Alerta } from "../../components/Alerta";

export const Dashboard = () => {

  const initialState = {
    name: "",
    price: "",
    categoryId: "",
    image_url: "",
  };

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [values, setValues] = useState(initialState);
  const [alerta, setAlerta] = useState(false);
  const alertaRef = useRef(null);


  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCategorias();
  }, []);

  console.log(categories);

  function resetForm() {
    setValues(initialState);
  }

  const handleChange = (e) => {
    setValues({
      ...values, [e.target.name]: e.target.value
    })
  }

   const handleChangeCategoria = (e) => {
     const opcionId = e.target.value;
     setValues({
        ...values, categoryId: opcionId
      });
   };

  const handleChangeImagen = (e) => {
    const selectedFile = e.target.files[0];
    setValues({
      ...values, image_url: selectedFile
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, price, categoryId, image_url } = values;
  
    if ([name, price, categoryId].includes("") || !image_url) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      alertaRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", categoryId);
    formData.append("image_url", image_url);
  
    try {
      const { data } = await axios.post("http://localhost:3000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (data.msg === "Ya existe ese producto") {
        setAlerta({
          msg: data.msg,
          error: true,
        });
        alertaRef.current.scrollIntoView({ behavior: "smooth" });
      } else {
        setAlerta({
          msg: "Producto añadido correctamente",
          error: false,
        });
        alertaRef.current.scrollIntoView({ behavior: "smooth" });
      }
      
      // Reset form
      resetForm();
  
      // Remove success message after 3 seconds
      setTimeout(() => {
        setAlerta({
          msg: "",
          error: false,
        });
      }, 3000);
  
    } catch (error) {
      setAlerta({
        msg: 'Ocurrió un error',
        error: true,
      });
      alertaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  console.log(values);

  const { msg } = alerta;
  return (
    <div ref={alertaRef}>
    <Container maxWidth="md" >
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Añadir Producto - EcomFlex
      </Typography>
      <form onSubmit={handleSubmit}>
      {msg && <Alerta alerta={alerta} />}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre del producto"
              name="name"
              required
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio"
              name="price"
              type="number"
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <select
              name="categoryId"
              onChange={handleChangeCategoria}
              style={{ height: 40 }}
              className="col-12 col-xs-6"
              required
            >
              <option value="">Elige una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item xs={12}>
            <input type="file" 
            className="form-control"
            accept="image/jpg, image/png, image/jpeg"
            onChange={handleChangeImagen}
            required />
            
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Añadir Producto
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error" align="center">
                {error}
              </Typography>
            </Grid>
          )}
        </Grid>
      </form>
    </Container>
    </div>
  );
};
