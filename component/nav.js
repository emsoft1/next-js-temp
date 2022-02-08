import Link from "next/Link";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
const Nav = () => {
    return (
        <div>
            <ButtonGroup variant="contained" aria-label="Login Button's ">
                <Link href={"/admin_login"}>
                    <Button>Admin</Button>
                </Link>
                <Button>Businesses login</Button>
                <Button>Launcher login</Button>
                <Link href={"/businesses"}>
                    <Button>Businesse list</Button>
                </Link>
            </ButtonGroup>
        </div>
    );
};

export default Nav;
