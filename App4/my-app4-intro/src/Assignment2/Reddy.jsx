import { useEffect, useState } from "react"

const Reddy_form = () => {
    const [user, setuser] = useState({
        Name: "",
        email: "",
        password: "",
        phone: "",
        role: "",
    });
    const [allusers, setusers] = useState([]);
    const [isedit, setisedit] = useState(false);
    useEffect(() => {
        getuserfromserver()
    }, [])
    const createuser = () => {
        axios.post("  http://localhost:4200/himadeep_user ",
            user).then(() => {
                console.log("reddy success")
                clearuser();
                getuserfromserver()
            });
        const edituser = (user) => {
            setuser(user);
            setisedit(true);

        };
        const deleteuser = (user) => {
            axios.post("http://localhost:4200/himadeep_user"+ usr.id).then(() => {
                getuserfromserver();
    

      })
      
  const updateUser = () => {
    axios
      .put("http://localhost:4200/himadeep_user" + user.id, user)
      .then(() => {
        getUsersFromServer();
        clearUser();
        setIsEdit(false);
      });
  };
  const clearUser = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      number: "",
    });
               
        }
    }
    }
}
