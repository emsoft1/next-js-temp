import Image from "next/image";
import Link from "next/link";
import styles from "../styles/main.module.css";

//in this component you can see the category list
const Cat_list = ({ list }) => {
    console.log(list);
    return (
        <div>
            {list &&
                list.map((x, idx) => {
                    return (
                        <Link
                            href={`/cat/[id]`}
                            as={`/cat/${x.cat_id}`}
                            key={idx}
                            passHref
                        >
                            <a>
                                <Image
                                    src={x.img}
                                    alt="zoolbia cat "
                                    width={100}
                                    height={100}
                                />
                                <h3>{x.category}</h3>
                            </a>
                        </Link>
                    );
                })}
        </div>
    );
};

export default Cat_list;
