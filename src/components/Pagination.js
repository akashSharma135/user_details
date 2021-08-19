import classes from "./Pagination.module.css";

// Component to add pagination to the website
function Pagination(props) {
  return (
    <div className={classes.pagination}>
      <div
        className={classes.previous}
        onClick={props.onLeftClick}
        id={props.currentPage === 1 ? classes.hide : classes.visible}
      >
        &laquo;
      </div>
      <div
        className={classes.next}
        onClick={props.onRightClick}
        id={
          props.currentPage === props.total_pages
            ? classes.hide
            : classes.visible
        }
      >
        &raquo;
      </div>
    </div>
  );
}

export default Pagination;
