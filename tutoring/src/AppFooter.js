function AppFooter() {
  const listDataArray = [
    {
      id: 1,
      title: "Features",
      listContentArray: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Stuff for developers",
        "Another one",
        "Last time",
      ],
    },
    {
      id: 2,
      title: "Resources",
      listContentArray: [
        "Resources",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      id: 3,
      title: "About",
      listContentArray: ["Team", "Locations", "Privacy", "Terms"],
    },
  ];

  return (
    <div className="footer">
      <div className="info">
        <p>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/images/bootstrapLogo.png`}
          />
        </p>
        <p className="copyright">© 2017-2018</p>
      </div>
      <div className="footer-list-container">
        {listDataArray.map(({ id, title, listContentArray }) => {
          return (
            <div
              key={`footer_list_wrapper_${id}`}
              className="footer-list-wrapper"
            >
              <h3 className="footer-list-title">{title}</h3>
              <ul className="footer-list">
                {listContentArray.map((listContent, index) => {
                  return (
                    <li
                      key={`footer_list_${id}_item_${index}`}
                      className="footer-list-content"
                    >
                      {listContent}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AppFooter;
