import { Header } from "../header";
import {BlockContainer} from "../../components/containers/block";
import {ContentContainer} from "../../components/containers/content";

export const Main = (props) => {
    return (
        <main>
            <Header />
            <BlockContainer>
                {props.children}
            </BlockContainer>
        </main>
    )
}
