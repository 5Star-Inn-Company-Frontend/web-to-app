import { Navbar } from "@/components/layouts/dashboardlayouts/Navbar";
import "./member.scss";
import { Sidebar } from "@/components/sidebar/Sidebar";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import LinearIndeterminate from "@/components/global/LinearProgress";

const backdropVariant = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      type: "spring",
      stiffness: 450,
    },
  },
};

export function Member() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [memberLoading, setMemberLoading] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [info, setInfo] = useState<any[]>([]);

  const [detail, setDetail] = useState({
    name: "",
    email: "",
    role_id: 0,
  });

  const handleClose = () => {
    //close the backdrop
    setOpen(false);
  };
  const handleOpen = () => {
    //open the backdrop
    setOpen(true);
  };

  const handleChange = (e: any) => {
    //extract the value of the radio button clicked.
    const { value } = e.target;
    // alert(`${name} : ${value}`);
    detail.role_id = value;
  };

  async function submitInvite(e: React.FormEvent) {
    setDetail(detail);
    console.log(detail);

    setIsLoading(true);
    e.preventDefault();

    //fetch API
    try {
      let response = await fetch(
        "https://web2app.prisca.5starcompany.com.ng/api/member",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            type: "text",
          },
          body: JSON.stringify(detail),
        }
      );
      //log response error
      if (!response.ok) {
        throw new Error("Unprocessable content!");
      }

      response = await response.json();
      console.log("Response: ", response);
      //navigate to homepage after successful login
      setTimeout(() => navigate("/app/members/"), 1000); //delayed to allow toast display

      toast.success("Invite sent Successfully!!!", {
        position: "bottom-right",
        draggable: true,
      });
    } catch (error) {
      //catch and log error
      console.error("error:", error);
      toast.error("The given data was invalid", {
        position: "bottom-right",
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  // Get the token from localStorage
  const savedToken: string | null = localStorage.getItem("authToken");

  useEffect(() => {
    setMemberLoading(true);

    const headers = new Headers();
    headers.set("Authorization", `Bearer ${savedToken}`);

    //Making the fetch request
    fetch("https://web2app.prisca.5starcompany.com.ng/api/member", {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        //     console.log("API Response:", data); // Check the full response
        // if (Array.isArray(data.data)) { // Check if data.data is an array
        //     setInfo(data.data);
        // } else {
        //     console.error("Unexpected data format:", data);
        // }

        setInfo(data.data);
        console.log(data.data);
        setMemberLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  }, []); //Empty dependency array means this runs on component mount.

  return (
    <div className="member">
      <Navbar />

      <div className="body">
        <Sidebar />
        <div className="container">
          <div className="up">
            <input
              type="text"
              name="search"
              placeholder="Search for a member"
            />
            <button onClick={handleOpen}>
              <i className="fa-solid fa-plus"></i>
              <span>Invite member</span>
            </button>
          </div>
          <div className="users">
            <table className="table">
              <thead>
                <tr>
                  <th className="user-col">USER</th>
                  <th className="email-col">EMAIL</th>
                  <th className="role-col">ROLE</th>
                  <th className="access-col">APP ACCESS</th>
                </tr>
              </thead>
              <tbody>
                {memberLoading ? (
                  <tr>
                    <td colSpan={4} style={{ padding: "0" }}>
                      <LinearIndeterminate />
                    </td>
                  </tr>
                ) : (
                  <>
                    {info.length > 0 ? (
                      info.map((member: any, index: any) => (
                        <tr
                          key={index}
                          onClick={() =>
                            navigate("/members/myaccount", {
                              state: { name: member.name, email: member.email },
                            })
                          }
                        >
                          <td className="user-row user-col">
                            <img src="../public/avatar.png" alt="" />
                            <span>{member.name}</span>
                          </td>
                          <td className="mail email-col">{member.email}</td>
                          <td className="role role-col">{member.role.name}</td>
                          <td className="user-row2 access-col">
                            <span>All</span>
                            <i className="fa-solid fa-angle-right arrow1"></i>
                          </td>{" "}
                        </tr>
                      ))
                    ) : (
                      <tr className="w-[100vw] ">
                        <td
                          colSpan={4}
                          style={{ padding: "10px", paddingLeft: "10px" }}
                          className="loading"
                        >
                          No members found!
                        </td>
                      </tr>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="backdrop">
        <Backdrop
          sx={{
            color: "#fff",
            backgroundColor: "#00000033",
            backdropFilter: "blur(2px)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
        >
          <motion.div
            className="content"
            variants={backdropVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="topHeader">
              <h2>Invite a New member to Emmy`s Team</h2>
              <i className="fa-solid fa-xmark" onClick={handleClose}></i>
            </div>
            <form action="" onSubmit={submitInvite}>
              <div className="first">
                <div className="name">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={(e) => (detail.name = e.target.value)}
                    placeholder="New member`s name"
                  />
                </div>
                <div className="email">
                  <label htmlFor="mail">Email</label>
                  <input
                    type="text"
                    name="mail"
                    required
                    onChange={(e) => (detail.email = e.target.value)}
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="center">
                <p>Organization Role</p>
                <form className="radioGroup">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      onChange={handleChange}
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Owner
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      onChange={handleChange}
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Collaboration
                    </label>
                  </div>
                </form>

                <p>App access</p>
                <div className="access">
                  <div className="leftAccess">
                    <img src="/access-logo.png" alt="" />
                    <p>Giftbills</p>
                  </div>
                  <div className="rightAccess">
                    <p>Admin</p>
                    <i className="fa-solid fa-angle-down"></i>
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <button type="button" onClick={handleClose}>
                  Cancel
                </button>

                {isLoading ? (
                  <Button
                    disabled
                    className="w-full text-white bg-[#24243E] p-[0.5rem]"
                  >
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
                    Please wait...
                  </Button>
                ) : (
                  <button type="submit">Send invite</button>
                )}
              </div>
            </form>
            <ToastContainer transition={Bounce} draggable />
          </motion.div>
        </Backdrop>
      </div>
    </div>
  );
}
