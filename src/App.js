import "./App.css";
import MakeTree from "./Component/MakeTree";

const data = [
  {
    name: "Root",
    children: [
      {
        name: "Child 1",
        children: [
          {
            name: "Grand Child",
          },
        ],
      },
      {
        name: "Child 2",
        children: [
          {
            name: "Grand Child",
            children: [
              {
                name: "Great Grand Child 1",
              },
              {
                name: "Grand Grand Child 2",
              },
            ],
          },
        ],
      },
      {
        name: "Child 2",
      },
    ],
  },
  {
    name: "Root",
    children: [
      {
        name: "Child 1",
        children: [
          {
            name: "Grand Child",
          },
        ],
      },
      {
        name: "Child 2",
        children: [
          {
            name: "Grand Child",
            children: [
              {
                name: "Great Grand Child 1",
              },
              {
                name: "Root",
                children: [
                  {
                    name: "Child 1",
                    children: [
                      {
                        name: "Grand Child",
                      },
                    ],
                  },
                  {
                    name: "Child 2",
                    children: [
                      {
                        name: "Grand Child",
                        children: [
                          {
                            name: "Great Grand Child 1",
                          },
                          {
                            name: "Root",
                            children: [
                              {
                                name: "Child 1",
                                children: [
                                  {
                                    name: "Grand Child",
                                  },
                                ],
                              },
                              {
                                name: "Child 2",
                                children: [
                                  {
                                    name: "Grand Child",
                                    children: [
                                      {
                                        name: "Great Grand Child 1",
                                      },
                                      {
                                        name: "Grand Grand Child 2",
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                name: "Child 2",
                              },
                            ],
                          },
                          {
                            name: "Grand Grand Child 2",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "Child 2",
                  },
                ],
              },
              {
                name: "Grand Grand Child 2",
              },
            ],
          },
        ],
      },
      {
        name: "Child 2",
      },
    ],
  },
  {
    name: "Root",
    children: [
      {
        name: "Child 1",
        children: [
          {
            name: "Grand Child",
          },
        ],
      },
      {
        name: "Child 2",
        children: [
          {
            name: "Grand Child",
            children: [
              {
                name: "Great Grand Child 1",
              },
              {
                name: "Grand Grand Child 2",
              },
            ],
          },
        ],
      },
      {
        name: "Child 2",
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <MakeTree title="mood" data={data} />
    </div>
  );
}

export default App;
