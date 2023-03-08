import React, { useState } from "react";

function Learning() {
  const [showAlgo, setShowAlgo] = useState(false);
  const [showArray, setShowArray] = useState(false);
  const [showLL, setShowLL] = useState(false);
  const [showStack, setShowStack] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [showHash, setShowHash] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [showTree, setShowTree] = useState(false);
  const [showRecursion, setShowRecursion] = useState(false);

  function Algorithm() {
    setShowAlgo(!showAlgo);
  }
  function Array() {
    setShowArray(!showArray);
  }
  function LL() {
    setShowLL(!showLL);
  }
  function Stack() {
    setShowStack(!showStack);
  }
  function Queue() {
    setShowQueue(!showQueue);
  }
  function Hash() {
    setShowHash(!showHash);
  }
  function Sort() {
    setShowSort(!showSort);
  }
  function Search() {
    setShowSearch(!showSearch);
  }
  function Graph() {
    setShowGraph(!showGraph);
  }
  function Tree() {
    setShowTree(!showTree);
  }
  function Recursion() {
    setShowRecursion(!showRecursion);
  }
  return (
    <div>
      <p>Learning Material</p>
      <div>
        <div onClick={Algorithm}>Algorithms</div>
        {showAlgo && (
          <iframe
            title="Algorithm"
            src="https://www.tutorialspoint.com/data_structures_algorithms/algorithms_basics.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Array}>Arrays</div>
        {showArray && (
          <iframe
            title="Array"
            src="https://www.tutorialspoint.com/data_structures_algorithms/array_data_structure.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={LL}>Linked List</div>
        {showLL && (
          <iframe
            title="LinkedList"
            src="https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Stack}>Stacks</div>
        {showStack && (
          <iframe
            title="Stacks"
            src="https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Queue}>Queues</div>
        {showQueue && (
          <iframe
            title="Queue"
            src="https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Hash}>Hash Table</div>
        {showHash && (
          <iframe
            title="HashTables"
            src="https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Sort}>Sorting Techniques</div>
        {showSort && (
          <iframe
            title="Sorting"
            src="https://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Search}>Searching Techniques</div>
        {showSearch && (
          <iframe
            title="Search"
            src="https://www.tutorialspoint.com/data_structures_algorithms/searching_algorithms.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Graph}>Graphs</div>
        {showGraph && (
          <iframe
            title="Graph"
            src="https://www.tutorialspoint.com/data_structures_algorithms/graph_data_structure.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Tree}>Trees</div>
        {showTree && (
          <iframe
            title="Tree"
            src="https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
      <div>
        <div onClick={Recursion}>Recursion</div>
        {showRecursion && (
          <iframe
            title="Recursion"
            src="https://www.tutorialspoint.com/data_structures_algorithms/recursion_basics.htm"
            width="100%"
            height="700px"
          />
        )}
      </div>
    </div>
  );
}

export default Learning;
