import React, { useState } from "react";
import TreeMenu from "./component/TreeMenu.js";
import Modal from "./component/modal.jsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //checking if modal box is open or not
  const [modalContent, setModalContent] = useState(""); //storing the modal content

  const handleNodeClick = (nodeName) => {
    setModalContent(nodeName); //setting content for modal box
    setIsModalOpen(true); //then opening the box
  };
  //tree menu data
  const menuData = [
    {
      id: "root",
      name: "Root",
      children: [
        {
          id: "parentA",
          name: "Parent A",
          children: [
            { id: "childA1", name: "Child A1" },
            {
              id: "childParentA2",
              name: "Child Parent A2",
              children: [
                { id: "childA21", name: "Child A21" },
                { id: "childA22", name: "Child A22" },
              ],
            },
          ],
        },
        {
          id: "parentB",
          name: "Parent B",
          children: [
            { id: "childB1", name: "Child B1" },
            { id: "childB2", name: "Child B2" },
            {
              id: "childParentB3",
              name: "Child Parent B3",
              children: [],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Dynamic Tree Menu</h1>
      <TreeMenu data={menuData} handleNodeClick={handleNodeClick} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>{modalContent}</h2>
      </Modal>
    </div>
  );
};

export default App;