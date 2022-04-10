import content from "../images/form-place-holder.jpg"

const Placeholder = ({title}) => (
        <div className="placeholder">
            <p style={{paddingTop: "11px", paddingBottom: "11px", textAlign: "center", backgroundColor: "#3A3A3A", marginBottom: "0px"}}>{title}</p>
            <div id="placeholder">
                <img src={content} style={{marginTop: "30px", marginBottom: "104px"}}/>
            </div>
            
        </div>
    )

export default Placeholder