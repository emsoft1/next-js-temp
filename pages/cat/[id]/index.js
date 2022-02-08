import { useRouter } from "next/router";
import axios from "axios";
//auto generating page for each ID in cat request
const Cat_item = ({ cat }) => {
    // const router = useRouter(); // if you want to read the id it self
    // const { id } = router.query;
    // console.log(cat);
    return <div>item page</div>;
};
Cat_item.getInitialProps = async (ctx) => {
    try {
        const getdata = await axios.get(
            `http://192.168.0.160:5051/cat_item_id/${ctx.query.id}` // url should be stored in contex
        );

        const cat = getdata.data.data;
        return { cat };
    } catch (error) {
        return { error };
    }
};
export default Cat_item;
