import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import axios from "axios";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [image, setImage] = useState();
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [widgetLoading, setWidgetLoading] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const adminToken = localStorage.getItem("adminToken");
  useEffect(() => {
    if (!adminToken) {
      navigate("/login");
    }
  }, []);
  const Imageupload = () => {
    setWidgetLoading(true);
    var myWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: "dbpxhm5vt",
        uploadPreset: "Nediyath",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImage(result.info.url);

          // setImage((prev) => [
          //   ...prev,
          //   { url: result.info.url, public_id: result.info.public_id },
          // ]);
        }
      }
    );

    myWidget.open();

  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/viewAllProduct");
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [loading]);
  const DeleteProduct = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {

          const config = {
            headers: {
              "auth-token": adminToken,
            },
          };

          const { data } = await axios.delete(
            `/api/admin/deleteProduct/${id}`,
            config
          );


          setLoading(true);
          if (loading) {
            setLoading(false)
          }

        } catch (error) {
          console.log(error);
        }
      } else {
        swal("Your Data Is Safe");
      }

    });
  };
  const onSubmit = async (item) => {

    // console.log(item, image);
    const { Name, Price, Description } = item;

    if (image) {
      try {
        const config = {
          headers: {
            "auth-token": adminToken,
          },
        };
        const { data } = await axios.post(
          "/api/admin/addProducts",
          { Name, Price, Description, image },
          config
        );
        reset()
        setImage("")
        setOpen(false)
        setLoading(!loading);

        console.log(data);
      } catch (error) {
        swal("OOPS!", "Somthing Wernt Wrong!", "error");
      }
    } else {
      swal("OOPS!", "Please Upload Image!", "error");
    }
  };
  const logout = () => {
    const adminToken = localStorage.setItem("adminToken", null);
    navigate("/admin");
  };

  return (
    <div class="s-layout">
      <div class="s-layout__sidebar">
        <a class="s-sidebar__trigger" href="#0">
          <i class="fa fa-bars"></i>
        </a>

        <nav class="s-sidebar__nav">
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              height: "100%",
            }}
          >
            <div>
              <li>
                <a class="s-sidebar__nav-link" href="/admin">
                  <i class="fa fa-home"></i>
                  <em>Product</em>
                </a>
              </li>
              {/* <li>
                <a class="s-sidebar__nav-link" href="/admin/gallery">
                  <i class="fa fa-user"></i>
                  <em>Gallery</em>
                </a>
              </li> */}
            </div>
            <div>
              <li>
                <a class="s-sidebar__nav-link" onClick={logout}>
                  <i class="fa fa-user"></i>
                  <em>Logout</em>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      <main className="s-layout__content">
        <div class="wrapper">
          <a
            onClick={handleOpen}
            class="btn btn-1 btn-success ms-3 mt-5 mb-3"
            style={{ float: "right", color: "white" }}
          >
            ADD IMAGE
          </a>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th scope="col">IMAGE</th>
                <th scope="col">PRODUCT NAME</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {product.map((items) => {
                return (
                  <tr>
                    <td data-label="Account">
                      <img
                        src={items.image}
                        style={{ width: "100px", height: "150px" }}
                        alt=""
                      />
                    </td>
                    <td data-6label="name">{items.Name}</td>
                    <td data-label="category">{items.Description}</td>

                    <td>
                      <a
                        onClick={(e) => {
                          DeleteProduct(items._id);
                        }}
                      >
                        {" "}
                        <DeleteIcon style={{ cursor: "pointer" }} />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open} >
            <Box sx={style}>
              <div>
                <h4 style={{ textAlign: "center" }}>ADD PRODUCTS</h4>
                <form
                  className="tm-edit-product-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="text"
                    placeholder="Enter Product Name"
                    className="form-control mt-3"
                    {...register("Name", {
                      required: "Name is Required",
                    })}
                    onKeyUp={() => {
                      trigger("Name");
                    }}
                  />
                  {errors.Name && (
                    <div>
                      <small className="text-danger">
                        {errors.Name.message}
                      </small>
                    </div>
                  )}
                  <textarea
                    rows="5"
                    placeholder="Enter Product Description"
                    className="form-control  mt-3"
                    {...register("Description", {
                      required: "Description is Required",
                    })}
                    onKeyUp={() => {
                      trigger("Description");
                    }}
                  />
                  {errors.Description && (
                    <div>
                      <small className="text-danger">
                        {errors.Description.message}
                      </small>
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Enter Product Price"
                    className="form-control  mt-3"
                    {...register("Price", {

                    })}
                    onKeyUp={() => {
                      trigger("Price");
                    }}
                  />
                  {errors.Price && (
                    <div>
                      <small className="text-danger">
                        {errors.Price.message}
                      </small>
                    </div>
                  )}
                  <a
                    className="form-control btn btn-warning mt-3"
                    onClick={Imageupload}
                    style={{cursor:widgetLoading?'disabled':'pointer'}}
                  >
                    UPLOAD IMAGE
                  </a>
                  {<div style={{ width: '7rem', height: '3rem',display:'inline' }}><img src={!image?'https://imgv3.fotor.com/images/homepage-feature-card/Upload-an-image.jpg':image} alt="" style={{ width: 'inherit', height: 'inherit',marginTop: '1rem' }} /></div>}
                  <span style={{marginLeft:'4%'}}>(255 x 255)</span>
                  <button type="submit" className="btn btn-success mt-3" style={{display:'block'}}>
                    SUBMIT
                  </button>
                  
                </form>
              </div>
            </Box>
          </Fade>
        </Modal>
      </main>
    </div>
  );
}

export default Sidebar;
