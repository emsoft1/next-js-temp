import axios from "axios";
import Cat_list from "../component/cat_list";
//in this page you can see the all the categories together
const Businesses = ({ cat }) => {
    return (
        <div>
            <h2>Businesses list</h2>
            <Cat_list list={cat} />
        </div>
    );
};

Businesses.getInitialProps = async (ctx) => {
    try {
        const getdata = await axios.get(`http://192.168.0.160:5051/cat_list`); // url should be stored in contex
        const cat = getdata.data.data;
        return { cat };
    } catch (error) {
        return { error };
    }
};
export default Businesses;
