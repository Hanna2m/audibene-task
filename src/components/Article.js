import { format } from "date-fns";
import Advertisement from "./Advertisement";
import advertImg from "../images/d_hand-ha-doubleOffer.jpg"
import Placeholder from "./Placeholder";


const Article = (props) => {

const headline = props.headline;
const subHeadline = props.subHeadline;
const editorName = props.editor;
const editorAvatar = props.avatar;
const articleCover = props.articleCover;
const caption1 = props.caption1;
const caption2 = props.caption2;
const mainText = props.mainText;
const block2 = props.block2;
const block3 = props.block3
const articleImg = props.articleImg;
const block4 = props.block4;

const d = new Date();
const postDate = format(d.setDate(d.getDate()-2), 'dd MMM, yyyy');
const postDate600 = format(d.setDate(d.getDate()), 'dd/MM/yyyy');
console.log(d);

return (
    <>
    <div id="article" className="article">
        <div className="article-header">
            <div className="date" id="x712">
                <p className="sub-text">{postDate}</p>
            </div>
            <div className="date" id="x600">
                <p className="sub-text">{postDate600}</p>
            </div>
            <div className="title">
                <h1>{headline}</h1>
                <p>{subHeadline}</p>
                <hr />
            </div>
            <div className="editor">
                <img src={editorAvatar}  alt="editor avatar" style={{width:"42px"}} id="editor-avatar"/>
                <div id="editor-name">
                    <h6 style={{margin: "0px", fontSize: '14px', lineHeight:"18px"}}>{editorName}</h6>
                    <p id="caption" style={{margin: "0px"}} className="sub-text">editor</p>
                </div>
            </div>
            <div className="article-cover">
                <img className="article-img" src={articleCover}  alt="cover" />
                <div className="image-hover">
                    <p style={{paddingLeft: "10px"}}>{caption1}</p>
                </div>
            </div>
        </div>
            <div className="article-body">
                {mainText.split('\n').map(str => <p>{str}</p>)}
                <h2>The result:</h2>
                <p>{block2}</p>
                <div className="article-cover">
                    <img src={articleImg}  alt="img" className="article-img" />
                    <div className="image-hover">
                        <p style={{paddingLeft: "10px"}}>{caption2}</p>
                    </div>
                </div>
                
                <h2>The High-Tech Hearing Aids of the Future:</h2>
                <p>{block3.split('\n').map(str => <p>{str}</p>)}</p>
                <Advertisement img={advertImg}
                                title="1,000 test listeners wanted"
                                offer="Would you like to test the Signia Nx free of charge and without obligation? Secure one of the limited test places now. Register here for free"
                />
                <h2>Going forward</h2>
                <p>{block4.split('\n').at(0)}</p>
                <Placeholder title="You can check if you qualify for an in-store trial below"/>
                <p>{block4.split('\n').at(1)}</p>
            </div>
        </div>

    </>
)
}

export default Article;