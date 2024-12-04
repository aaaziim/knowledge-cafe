import PropTypes from "prop-types"


const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="font-medium  bg-slate-100 rounded-lg p-2 my-4">
            <h1 className="text-xl">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;