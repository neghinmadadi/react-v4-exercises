function SnackFooter() {
  /** create date obj to add to the footer */
  const today = new Date();
  const thisYear = today.getFullYear();

  return (
    <footer>
      <small>
        {`Copyright \u00A9 ${thisYear} Don't you dare touch my snacks!`}
      </small>
    </footer>
  );
}

export default SnackFooter;
