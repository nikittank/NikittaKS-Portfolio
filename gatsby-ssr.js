import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      async
      key="gtag-script"
      src="https://www.googletagmanager.com/gtag/js?id=G-Z2YXYK9BX4"
    />,
    <script
      key="gtag-inline"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z2YXYK9BX4');
        `,
      }}
    />,
  ]);
};
