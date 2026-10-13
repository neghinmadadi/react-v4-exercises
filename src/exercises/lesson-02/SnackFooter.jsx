function SnackFooter() {
  /** create date obj to add to the footer */
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <small>
        Copyright © {thisYear} Don&apos;t You Dare Touch My Snacks! All Rights
        Reserved.
      </small>
    </footer>
  );
}

export default SnackFooter;
