// interface ScopeConfig {
//   path: string;
//   named: boolean | string[];
// }

// interface RpdConfig {
//   color: string;
//   packageName: string;
//   icon: string;
//   scope: Record<string, ScopeConfig>;
//   markdown: string;
// }

module.exports = {
  color: "#aaaaaa",
  packageName: "react-pkg-demo",
  icon: "⬇️",
  scope: {
    Button: {
      path: "/Users/coston/code/coston/react-pkg-demo/apps/cool/src",
      named: true,
    },
    Code: {
      path: "/Users/coston/code/coston/react-pkg-demo/apps/cool/src",
      named: true,
    },
  },
  markdown: "./readme.md",
};
