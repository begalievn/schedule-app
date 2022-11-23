import { Header } from "../header";
import {BlockContainer} from "../../components/containers/block";
import {ContentContainer} from "../../components/containers/content";

export const Main = (props) => {
    return (
        <main>
            <BlockContainer>
                <ContentContainer>
                    <Header />
                    <h1>Main</h1>
                    {props.children}
                </ContentContainer>
            </BlockContainer>
            
        </main>
    )
}
