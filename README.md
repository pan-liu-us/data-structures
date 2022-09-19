
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

<div>
  <h1 id="exercise-data-structures">Data Structures</h1>
  <h2 id="sprint-one-object-oriented-programming">Sprint One: Object-Oriented Programming</h2>
  <hr>
  <p>In this assignment, we'll implement and test two basic data structures:</p>
  <h3>1. <a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)" class="external-link" target="_blank">Queue
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></h3>
  <p>A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (<em>FIFO</em>: first in, first out).</p>
  <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/440px-Data_Queue.svg.png" alt="queue image" width="200" ></p>
  <h4 id="a-queue-would-be-great-for">A queue would be great for....</h4>
  <p>Issuing instructions to your sandwich-making robot.</p>
  <h3>2. <a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)" class="external-link" target="_blank">Stack
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></h3>
  <p>A stack works like a stack of plates -- plates are added and removed from the the top of the stack (<em>LIFO</em>: last in, first out).</p>
  <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/440px-Data_stack.svg.png" alt="stack image" width="200"></p>
  <h4 id="a-stack-would-be-great-for">A stack would be great for...</h4>
  <p>Implementing your browser's back button.</p>
  <h2 id="bare-minimum-requirements">Bare Minimum Requirements</h2>
  <p>Implement both <strong>stack</strong> and <strong>queue</strong> data structures in each of the instantiation styles. The functional style is stubbed out in <code tabindex="0">src/functional/queue.js</code> and <code tabindex="0">src/functional/stack.js</code> to get you started.</p>
  <ul>
    <li>No arrays! Instead, use an object with numeric keys</li>
  </ul>
  <ul class="task-list">
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Pass all the tests. To run all the tests, first run <code tabindex="0">npm start</code> in your terminal from the sprint's root directory. You'll know if this step completed successfully when you see the following output in your terminal:</p>
      <pre class="text" tabindex="0"><code tabindex="0" class="hljs plaintext">Serving "/Users/.../your-sprint-folder" at http://127.0.0.1:xxxx
</code></pre>
      <p>Now, navigate to the <code tabindex="0">http://127.0.0.1:xxxx</code> link in your browser (don't forget to include the colon and extra numbers at the end), and open the <code tabindex="0">SpecRunner.html</code> file.</p>
    </li>
  </ul>
  <h3 id="data-structure-specs">Data Structure Specs</h3>
  <ul class="task-list">
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Implement a <a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)">stack</a> with the following methods:</p>
      <ul>
        <li><code tabindex="0">push(string)</code> - Add a string to the top of the stack</li>
        <li><code tabindex="0">pop()</code> - Remove and return the string on the top of the stack</li>
        <li><code tabindex="0">size()</code> - Return the number of items on the stack</li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Implement a <a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)">queue</a> with the following methods:</p>
      <ul>
        <li><code tabindex="0">enqueue(string)</code> - Add a string to the back of the queue</li>
        <li><code tabindex="0">dequeue()</code> - Remove and return the string at the front of the queue</li>
        <li><code tabindex="0">size()</code> - Return the number of items in the queue</li>
      </ul>
    </li>
  </ul>
  <h3 id="instantiation-styles">Instantiation Styles</h3>
  <ol>
    <li>
      <p><strong>Functional instantiation</strong>: a simple "maker" pattern</p>
      <ul>
        <li><em>Do:</em>
          <ul>
            <li>Work within the <code tabindex="0">src/functional/</code> folder</li>
            <li>Define all functions and properties within the maker function</li>
            <li>Capitalize the maker function name</li>
          </ul>
        </li>
        <li><em>Don't:</em>
          <ul>
            <li>Use the keyword <code tabindex="0">new</code>, the keyword <code tabindex="0">this</code>, or any <code tabindex="0">prototype</code> chains</li>
          </ul>
        </li>
        <li><em>Example</em>: The provided classes <code tabindex="0">Stack</code> and <code tabindex="0">Queue</code> already follow this pattern</li>
      </ul>
    </li>
    <li>
      <p><strong>Functional instantiation with shared methods</strong>: same as step 1, but with shared methods</p>
      <ul>
        <li><em>Do:</em>
          <ul>
            <li>Work within the <code tabindex="0">src/functional-shared/</code> folder</li>
            <li>Create an object that holds the methods that will be shared by all instances of the class</li>
            <li>Use the keyword <code tabindex="0">this</code> in your methods</li>
            <li>Use <a href="http://underscorejs.org/#extend" class="external-link" target="_blank"><code tabindex="0">_.extend</code>
                <svg class="svg">
                  <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
                </svg>
              </a> to copy the methods onto the instance</li>
          </ul>
        </li>
        <li><em>Don't:</em>
          <ul>
            <li>Use the keyword <code tabindex="0">new</code> or <code tabindex="0">prototype</code> chains</li>
          </ul>
        </li>
        <li><em>Example</em>: <a href="https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeExtend.js" class="external-link" target="_blank">functional instantiation example
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a></li>
      </ul>
    </li>
    <li>
      <p><strong>Prototypal instantiation</strong>: using <code tabindex="0">Object.create</code></p>
      <ul>
        <li><em>Do:</em>
          <ul>
            <li>Work within the <code tabindex="0">src/protoypal/</code> folder.</li>
            <li>Use <a href="http://mdn.io/Object.create" class="external-link" target="_blank"><code tabindex="0">Object.create</code>
                <svg class="svg">
                  <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
                </svg>
              </a> with the object from step 2 to create instances of your class</li>
          </ul>
        </li>
        <li><em>Don't:</em>
          <ul>
            <li>Use the keyword <code tabindex="0">new</code></li>
          </ul>
        </li>
        <li><em>Example:</em> <a href="https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePrototype.js" class="external-link" target="_blank">prototypal instantiation example
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a></li>
      </ul>
    </li>
    <li>
      <p><strong>Pseudoclassical instantiation</strong>: create instances with the keyword <code tabindex="0">new</code></p>
      <ul>
        <li><em>Do:</em>
          <ul>
            <li>Work within the <code tabindex="0">src/pseudoclassical/</code> folder</li>
            <li>Capitalize your function name to indicate to others that it is intended to be run with the keyword <code tabindex="0">new</code></li>
            <li>Use the keyword <code tabindex="0">new</code> when instantiating your class</li>
            <li>Use the keyword <code tabindex="0">this</code> in your constructor</li>
          </ul>
        </li>
        <li><em>Don't:</em>
          <ul>
            <li>Declare the instance explicitly</li>
            <li>Return the instance explicitly</li>
          </ul>
        </li>
        <li><em>Example:</em> <a href="https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js" class="external-link" target="_blank">pseudoclassical instantiation example
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a></li>
      </ul>
    </li>
    <li>
      <p><strong>ES6 instantiation</strong>: declare classes with the keyword <code tabindex="0">class</code></p>
      <ul>
        <li><em>Do:</em>
          <ul>
            <li>Work within the <code tabindex="0">src/es6/</code> folder</li>
            <li>Capitalize your function name to indicate to others that it is intended to be run with the keyword <code tabindex="0">new</code></li>
            <li>Use the keyword <code tabindex="0">new</code> when instantiating your class</li>
            <li>Use the keyword <code tabindex="0">this</code> in your constructor</li>
            <li>Explicitly declare a class method named <code tabindex="0">constructor</code></li>
            <li>Declare all other class methods within the class declaration</li>
          </ul>
        </li>
        <li><em>Don't:</em>
          <ul>
            <li>Declare the instance explicitly</li>
            <li>Return the instance explicitly</li>
            <li>Add class methods to the class prototype directly</li>
          </ul>
        </li>
        <li><em>Example:</em> <a href="https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeES6.js" class="external-link" target="_blank">es6 instantiation example
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a></li>
      </ul>
    </li>
  </ol>
  <h2 id="sprint-two-data-structures">Sprint Two: Data Structures</h2>
  <hr>
  <p>This repo holds a mostly-empty <a href="https://mochajs.org/" class="external-link" target="_blank">Mocha
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a> test suite. To run all the tests, first run <code tabindex="0">npm start</code> in your terminal from the sprint's root directory. You'll know if this step completed successfully when you see the following output in your terminal:</p>
  <pre class="text" tabindex="0"><code tabindex="0" class="hljs plaintext">Serving "/Users/.../your-sprint-folder" at http://127.0.0.1:xxxx
</code></pre>
  <p>Now, navigate to the <code tabindex="0">http://127.0.0.1:xxxx</code> link in your browser (don't forget to include the colon and extra numbers at the end), and open the <code tabindex="0">SpecRunner.html</code> file.</p>
  <p>Some failing specs are included. You're welcome! You should make them pass, then write more specs and more code.</p>
  <h2 id="bare-minimum-requirements-2">Bare Minimum Requirements</h2>
  <h3 id="implement-and-test-the-following-classes">Implement and test the following classes:</h3>
  <h3>1. <a href="https://en.wikipedia.org/wiki/Linked_list" class="external-link" target="_blank">Linked List
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></h3>
  <p>A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to an array which on average has linear time insertion and removal operations). In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list from the beginning.</p>
  <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/408px-Singly-linked-list.svg.png" alt="Linked List image" width="250"></p>
  <h4 id="a-linked-list-would-be-great-for">A linked list would be great for....</h4>
  <p>An itinerary you expect to add and remove destinations to and from.</p>
  <ul>
    <li>A <code tabindex="0">linkedList</code> class, in functional style, with the following properties:
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> <code tabindex="0">.head</code> property, a <code tabindex="0">linkedListNode</code> instance</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> <code tabindex="0">.tail</code> property, a <code tabindex="0">linkedListNode</code> instance</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> <code tabindex="0">.addToTail()</code> method, takes a value and adds it to the end of the list</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> <code tabindex="0">.removeHead()</code> method, removes the first node from the list and returns its value</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> <code tabindex="0">.contains()</code> method, returns boolean reflecting whether or not the passed-in value is in the linked list</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> What is the time complexity of the above functions?</li>
      </ul>
    </li>
  </ul>
  <h3>2. <a href="https://en.wikipedia.org/wiki/Tree_(data_structure)" class="external-link" target="_blank">Tree
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></h3>
  <p>A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.</p>
  <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/440px-Tree_%28computer_science%29.svg.png" alt="Tree image" width="200"></p>
  <h4 id="a-tree-would-be-great-for">A tree would be great for....</h4>
  <p>Making a family tree.</p>
  <ul>
    <li>A <code tabindex="0">tree</code> class, in functional with shared methods style, with the following properties:
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> <code tabindex="0">.children</code> property, an array containing a number of subtrees</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> <code tabindex="0">.addChild()</code> method, takes any value, sets that as the target of a node, and adds that node as a child of the tree</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.contains()</code> method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> What is the time complexity of the above functions?</li>
      </ul>
    </li>
  </ul>
  <h3>3. <a href="https://en.wikipedia.org/wiki/Graph_theory" class="external-link" target="_blank">Graph
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></h3>
  <p>Graphs consist of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed, which means there is an asymmetrical relationship between nodes that are connected by an edge. You will be implementing an undirected graph.</p>
  <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/6n-graf.svg/440px-6n-graf.svg.png" alt="Graph image" width="200"></p>
  <h4 id="a-graph-would-be-great-for">A graph would be great for....</h4>
  <p>Representing how a collection of websites (or the entire world wide web) link to each other, and <a href="https://www.cs.princeton.edu/courses/archive/spring13/cos226/lectures/42DirectedGraphs.pdf" class="external-link" target="_blank">many other things
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></p>
  <ul>
    <li>Implement a <code tabindex="0">graph</code> class, in pseudoclassical style, with the following properties:
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> It is an undirected graph. It does not have to be 'connected'.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> An <code tabindex="0">.addNode()</code> method that takes a new node and adds it to the graph</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.contains()</code> method that takes any node and returns a boolean reflecting whether it can be found in the graph</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.removeNode()</code> method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> An <code tabindex="0">.addEdge()</code> method that creates a edge (connection) between two nodes if they both are present within the graph</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.hasEdge()</code> method that returns a boolean reflecting whether or not two nodes are connected</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.removeEdge()</code> method that removes the connection between two nodes</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.forEachNode()</code> method that traverses through the graph, calling a passed in function once on each node</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> What is the time complexity of the above functions?</li>
      </ul>
    </li>
  </ul>
  <h3>4. <a href="https://en.wikipedia.org/wiki/Set_(abstract_data_type)" class="external-link" target="_blank">Set
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></h3>
  <p>Sets contain unique values in no particular order.</p>
  <p><img src="https://www.codeproject.com/KB/recipes/dotnetset/Sets02.png" alt="Set image" width="300"></p>
  <h4 id="a-set-would-be-great-for">A set would be great for....</h4>
  <p>A raffle, where all the tickets are unique and you just want to randomly pick one (or several) out of them all.</p>
  <ul>
    <li>A <code tabindex="0">set</code> class, in prototypal style, with the following properties:
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> An <code tabindex="0">.add()</code> method, takes any string and adds it to the set</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.contains()</code> method, takes any string and returns a boolean reflecting whether it can be found in the set</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.remove()</code> method, takes any string and removes it from the set, if present</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> What is the time complexity of the above functions?</li>
      </ul>
      <ul>
        <li><strong>Note:</strong> Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.</li>
        <li><strong>Note:</strong> Until the advanced section, your sets should handle only string values.</li>
        <li><strong>Note:</strong> This is a rather simple data structure. Take a look at the <a href="https://en.wikipedia.org/wiki/Set_(abstract_data_type)">Wikipedia</a> entry. Which native Javascript type fits the requirements best?</li>
      </ul>
    </li>
  </ul>
  <h3>5. <a href="https://en.wikipedia.org/wiki/Hash_tables" class="external-link" target="_blank">Hash Table
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></h3>
  <p>Hash tables (sometimes called hash maps) store key value pairs. They do so in a memory efficient way by using a 'hashing function' that translates keys into numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible.</p>
  <p><img src="https://user-images.githubusercontent.com/13425777/77678866-0d08c700-6f4f-11ea-8cb7-daf83e78d937.png" alt="Hash Table image" width="300"></p>
  <h4 id="a-hash-table-would-be-great-for">A hash table would be great for....</h4>
  <p>A contact list you might add to or remove from over time.</p>
  <ul class="task-list">
    <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">hashTable</code> class, in pseudoclassical style:
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> <strong>First:</strong> Play with each of the helper functions provided to get a sense of what they do.
          <ul>
            <li>You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.</li>
            <li>A <code tabindex="0">limitedArray</code> helper has been provided for you, check out the source code for it in <code tabindex="0">src/hashTableHelpers.js</code>. Use it to store all inserted values rather than using a plain JavaScript array. The <code tabindex="0">limitedArray</code>, as you will see in the source code, provides <code tabindex="0">get</code>, <code tabindex="0">set</code>, and <code tabindex="0">each</code> methods which you should use in order to interact with it. Do not use the typical bracket notation for arrays when interacting with a <code tabindex="0">limitedArray</code> instance. Try interacting with it from the console first.</li>
          </ul>
        </li>
        <li>Make the following properties appear on all instances:
          <ul class="task-list">
            <li class="task-list-item"><input type="checkbox" class="md-task"> An <code tabindex="0">.insert()</code> method</li>
            <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.retrieve()</code> method</li>
            <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.remove()</code> method</li>
          </ul>
        </li>
      </ul>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> What is the time complexity of the above functions?</li>
      </ul>
    </li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Using your understanding of hash tables, refactor your set implementation from above to run in constant time</li>
  </ul>
  <p><strong>On Objects and Hash Tables:</strong> An astute hacker might find themself wondering "Is it not so that a JavaScript object is a hash table?" or even further, "Why would I ever need to create a hash table in JavaScript?" While it is true that objects and hash tables are functionally similar, knowing how a hash table works is hugely important as they are an incredibly useful and fundamental data structure. To have detailed knowledge of how a hash table is constructed will give you valuable insight on your path to code mastery. Additionally, other languages might not provide the convenience of JavaScript's object class, meaning you may someday have to put your hash table construction abilities to good use.</p>
  <p>**Interesting Aside: JavaScript objects aren't necessarily backed by hash tables. Despite the similarities, the <a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf" class="external-link" target="_blank">ECMA-262
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a> standard makes no restrictions on how JavaScript objects are implmented. The <a href="https://developers.google.com/v8/design?hl=sv&amp;csw=1#prop_access">V8 JavaScript engine</a>, which is used in Chrome, implements objects in a way that is significantly faster than using a hash table.</p>
  <h3>6. <a href="http://en.wikipedia.org/wiki/Binary_search_tree" class="external-link" target="_blank">Binary Search Tree
      <svg class="svg">
        <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
      </svg>
    </a></h3>
  <p>Binary trees are trees that can only have 0, 1, or 2 children. Remember that trees are recursive data structures and therefore a tree's children are themselves trees and can each have 0, 1, or 2 children. In a binary <em>search</em> tree, one child (out of potentially two) will always be less than the node's value (based on whatever sorting condition you wish) and the other child will always be greater than the node's value. Whether it is the 'left' or the 'right' child which is greater or lesser is consistent throughout the binary search tree. This structure results in particularly fast find operations. You'll be asked to answer just how fast yourself.</p>
  <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png" alt="Binary Search Tree image" width="200"></p>
  <h4 id="a-binary-search-tree-would-be-great-for">A binary search tree would be great for....</h4>
  <p>A dictionary of all English words.</p>
  <ul>
    <li>Implement a <code tabindex="0">binarySearchTree</code> class with the following properties:
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.left</code> property, a binary search tree (BST) where all values are lower than the current value.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.right</code> property, a BST where all values are higher than the current value.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.insert()</code> method, which accepts a value and places it in the tree in the correct position.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.contains()</code> method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.depthFirstLog()</code> method, which accepts a callback and executes it on every value contained in the tree.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> What is the time complexity of the above functions?</li>
      </ul>
      <ul>
        <li>Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.</li>
      </ul>
    </li>
  </ul>
  <h3 id="tests">Tests</h3>
  <ul class="task-list">
    <li class="task-list-item"><input type="checkbox" class="md-task"> For each of the data structures you have implemented, go back and add at least one additional unit test. If possible, try to add a test that will require you improve your implementation in order to make the test pass.</li>
  </ul>
  <h2 id="apis-and-implementation-a-note-on-communicating-your-intentions-as-a-developer">APIs and Implementation: A Note on Communicating Your Intentions as a Developer</h2>
  <p><strong>tl;dr</strong>: <em>prefix private properties and methods with an underscore</em></p>
  <p>APIs are more than just URLs that return data; <strong>API</strong> is a general term that refers to the visible surface of any system, object, or library with which your code interacts. E.g., an airplane has an API that consists of knobs, dials, pedals, and a yoke which allow the pilot to make use of the airplane's underlying <strong>implementation</strong>--an engine, wings, and rudders. Importantly, the next model of airplane will probably have improvements to the engine, but the pilot need not know about this, as the controls will remain basically unchanged.</p>
  <p>This relationship between APIs and implementations--that they remain independent--is what keeps the towering stacks of software we use everyday from falling over.</p>
  <p>In JavaScript, because there is no concept of private variables (except through closure), sometimes API and implementation are both visible. If it's impossible to distinguish between API and implementation, you might depend upon a piece of implementation that later changes and breaks your code.</p>
  <p>To prevent this from happening to your collaborators and consumers, indicate private properties and methods by prefixing them with an underscore. This is how we do.</p>
  <h2 id="advanced-content">Advanced Content</h2>
  <p>Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer.</p>
  <ul>
    <li><strong>Use the [Chrome profiling tools] to compare the performance of each instantiation pattern.</strong>
      <ul>
        <li>Create a new HTML page with your data structures and an additional profiling script. It should instantiate and use a large number of stacks and queues</li>
        <li>Reload the page with the CPU profiler running to investigate the runtime of your functions</li>
        <li>Take a heap snapshot to investigate object allocations and memory use</li>
        <li>Optionally, reload the page with the heap profiler running to investigate garbage collection behavior</li>
        <li>Do this for each of the instantiation styles, record, and compare the results. Write a brief analysis you could share with a supervisor who needs the information you have in order to make wise decisions about the design of an upcoming project.</li>
      </ul>
    </li>
  </ul>
  <p><strong>Note</strong>: <em>The following prompts have varying levels of difficulty and you may not wish to complete all of them in entirety. In order to decide how to allocate your time, please read the descriptions of all of them before starting.</em></p>
  <p>Implement the following data structures and improvements. Use any instantiataion style you like.</p>
  <p><strong>Optional, but highly recommended</strong>: Use TDD.</p>
  <ul>
    <li>Create a <a href="http://en.wikipedia.org/wiki/Doubly_linked_list" class="external-link" target="_blank"><code tabindex="0">doubly-linked-list</code>
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a>, with all the methods of your linked list, and add the following properties:
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> An <code tabindex="0">.addToHead()</code> method which takes a value and adds it to the front of the list.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.removeTail()</code> method which removes the last node from the list and returns its value.</li>
      </ul>
      <ul>
        <li>Note: each <code tabindex="0">node</code> object will need to have a new <code tabindex="0">.previous</code> property pointing to the node behind it (or to <code tabindex="0">null</code> when appropriate); this is what makes it a doubly-linked list.</li>
      </ul>
    </li>
    <li>Add parent links to your <code tabindex="0">tree</code>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.parent</code> property, which refers to the parent node or null when there is no node</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> A <code tabindex="0">.removeFromParent()</code> method, which disassociates the tree with its parent (in both directions)</li>
      </ul>
    </li>
  </ul>
  <ul class="task-list">
    <li class="task-list-item"><input type="checkbox" class="md-task"> To prevent excessive collisions, make your <code tabindex="0">hashTable</code> double in size as soon as 75 percent of the spaces have been filled</li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> To save space, make sure the <code tabindex="0">hashTable</code> halves in size when space usage falls below 25 percent</li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Implement a <code tabindex="0">.traverse()</code> method on your <code tabindex="0">tree</code>. Your <code tabindex="0">.traverse()</code> should accept a callback and execute it on every value contained in the tree</li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> <code tabindex="0">.breadthFirstLog()</code> method for <code tabindex="0">binarySearchTee</code>, logs the nodes contained in the tree using a breadth-first approach</li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Make your <code tabindex="0">set</code> capable of handling numbers as well as strings</li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Make your <code tabindex="0">set</code> capable of handling input objects of any type</li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Make your <code tabindex="0">binarySearchTree</code> rebalance as soon as the max depth is more than twice the minimum depth</li>
  </ul>
  <ul>
    <li>Implement a <code tabindex="0">bloomFilter</code>:
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> Read the <a href="http://en.wikipedia.org/wiki/Bloom_filter" class="external-link" target="_blank">Wikipedia article about Bloom Filters
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a> and/or <a href="http://billmill.org" class="external-link" target="_blank">BillMill.org
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a>'s <a href="http://billmill.org/bloomfilter-tutorial/" class="external-link" target="_blank">Bloom Filters by Example
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a>. tl;dr: It's a probabalistic data structure that efficiently determines whether or not an element is contained in a set. The downside is that is can report false positives. Use cases are often for checking against a giant list locally and only doing a full lookup when the local one comes back positive.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> Create an "m=18, k=3" bloom filter. This means 18 slots, with 3 hash functions.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> Run a small loop that runs 10,000 trials of trying to retreive a mix of items that are in the filter and not in the filter.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> Record the empirical rate of false-positives by comparing your result with what you know to be true from the inputs you selected.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> Compare that rate with the approximation given for Bloom filters, which is approximated as <code tabindex="0">(1- e^(-kn/m))^k</code></li>
      </ul>
    </li>
  </ul>
  <h2 id="nightmare-mode">Nightmare Mode</h2>
  <p><strong>Note:</strong> Please feel free to attempt the following in any order you would like.</p>
  <ul class="task-list">
    <li class="task-list-item"><input type="checkbox" class="md-task"> Write a <a href="https://en.wikipedia.org/wiki/Trie" class="external-link" target="_blank"><code tabindex="0">prefixTree</code>
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a> that can handle autocomplete for T9-style texting</li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Write a <a href="http://en.wikipedia.org/wiki/B-tree" class="external-link" target="_blank"><code tabindex="0">bTree</code>
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a></li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Write a <a href="http://en.wikipedia.org/wiki/Red%E2%80%93black_tree" class="external-link" target="_blank"><code tabindex="0">redBlackTree</code>
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a></li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Design a data structure that finds every English word that can be made from a given bag of Scrabble letters
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> Optimize the algorithm and the data structure to return the set of words as quickly as possible
          <ul>
            <li>Your priority for this task is to optimize for time complexity, but do try to avoid wasted space in your solution</li>
            <li>You can assume you have all the time required to do preprocessing on a dictionary of English words</li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="task-list-item"><input type="checkbox" class="md-task"> Advanced <a href="http://en.wikipedia.org/wiki/Graph_(mathematics)"><code tabindex="0">graph</code></a> work using <a href="https://nodejs.org/" class="external-link" target="_blank">Node.js
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a> (see section below)</li>
  </ul>
  <h3 id="advanced-graphs-with-nodejs">Advanced Graphs with Node.js</h3>
  <p>For this exercise you will work with adjacency list representations of graphs using Node.js, which will allow you to interact with your file system. You'll learn a ton about node later in the course, but this is advanced content so why not get started early.</p>
  <ul class="task-list">
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Create a basic JavaScript file that logs something to the console</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> In the terminal, in the directory of the file you just created (for this example let's say it's called <code tabindex="0">test.js</code>) run the command <code tabindex="0">node test.js</code>. You just ran JavaScript with the node interpreter and should see whatever you logged to the console in the terminal</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Familiarize yourself with <a href="https://en.wikipedia.org/wiki/Adjacency_list" class="external-link" target="_blank">Adajency Lists
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> and <a href="https://en.wikipedia.org/wiki/Adjacency_matrix" class="external-link" target="_blank">Adjacency Matrices
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a></p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Whiteboard either a directed or an undirected graph and then translate it into an adjacency list text file</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Write a function to return how many nodes your graph has. In order to accomplish this you will need to use node's <code tabindex="0">fs</code> module to read your adjacency list text file and split it into lines. You'll learn how to do this later in the course, but for now, feel free to use the following code:</p>
      <pre><code class="javascript hljs" tabindex="0"><span class="hljs-comment"><span class="hljs-comment">// this line lets you access the file system. You'll learn more about it later in the course</span></span>
<span class="hljs-keyword"><span class="hljs-keyword">var</span></span> fs = <span class="hljs-built_in"><span class="hljs-built_in">require</span></span>(<span class="hljs-string"><span class="hljs-string">'fs'</span></span>);

<span class="hljs-comment"><span class="hljs-comment">// read the `adjacency-list` file in this directory (you might have named the file differently) and split it on new lines into an array</span></span>
<span class="hljs-keyword"><span class="hljs-keyword">var</span></span> fileLines = fs.readFileSync(<span class="hljs-string"><span class="hljs-string">'./adjacency-list'</span></span>).toString().split(<span class="hljs-string"><span class="hljs-string">'\n'</span></span>);

<span class="hljs-comment"><span class="hljs-comment">// you may have to do this 0 or more times, to remove blank lines from fileLines</span></span>
fileLines.pop();

fileLines.forEach(<span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span><span class="hljs-function">(</span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">line</span></span></span><span class="hljs-function">) </span></span>{
  <span class="hljs-comment"><span class="hljs-comment">// here you have access to each line of the adjacency list</span></span>
  <span class="hljs-built_in"><span class="hljs-built_in">console</span></span>.log(line);
});
</code></pre>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Write a function to peform a <a href="http://www.algolist.net/Algorithms/Graph/Undirected/Depth-first_search" class="external-link" target="_blank">depth first search
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> (DFS) on your graph and output the node values in depth first order</p>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> Write Unit Tests for your DFS function</li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Try running your DFS function on a <a href="https://snap.stanford.edu/data/#socnets" class="external-link" target="_blank">larger adjacency list
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a></p>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> Find, or create, a data set that will result in your exceeding the maximum call stack size, and then, refactor your DFS function to use <a href="https://en.wikipedia.org/wiki/Tail_call" class="external-link" target="_blank">tail-call recursion
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a> which is now possible in JavaScript on account of new language features introduced in the ES6 specification.</li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Implement <a href="https://en.wikipedia.org/wiki/Karger%27s_algorithm" class="external-link" target="_blank">Karger's Algorithm
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> to identify the <a href="https://en.wikipedia.org/wiki/Minimum_cut" class="external-link" target="_blank">Minimum Cut
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> for the minimum number of edges in an undirected graph</p>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> Write Unit Tests for your implementation</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> Start with a small undirected graph (in adjacency list format) of your own making, then give it a go with a <a href="https://snap.stanford.edu/data/#socnets">larger adjacency list</a>
          <ul class="task-list">
            <li class="task-list-item"><input type="checkbox" class="md-task"> Try really hard to break your implementation so you are forced to improve it</li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Use <a href="https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm" class="external-link" target="_blank">Kosaraju's Algorithm
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> to identify the greatest <a href="https://en.wikipedia.org/wiki/Strongly_connected_component" class="external-link" target="_blank">strongly connected component
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> (SCC) of a directed graph</p>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> Write Unit Tests for your implementation</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> Start with a small directed graph (in adjacency list format) of your own making, then give it a go with a <a href="https://snap.stanford.edu/data/#socnets">larger adjacency list</a>
          <ul class="task-list">
            <li class="task-list-item"><input type="checkbox" class="md-task"> Try really hard to break your implementation so you are forced to improve it</li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Build a web crawler (see the Nightmare Mode content from the Recursion Review repo), to crawl the <a href="https://en.wikipedia.org/wiki/Webgraph" class="external-link" target="_blank">webgraph
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a>, and utilize your implementation of Kosaraju's Algorithm to identify clusters of strongly connected web sites. Present your findings in a way that is easy for humans to understand.</p>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> Make your web crawler robust enough to run overnight, recovering from failures, so that you can return in the morning with massive amounts of meaningful data.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> As your web crawler runs, store all the information it gathers in <a href="http://redis.io/" class="external-link" target="_blank">redis
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a>. You will have to use <a href="https://github.com/NodeRedis/node_redis" class="external-link" target="_blank">the Node.js redis client
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a> in order to do this.</li>
      </ul>
    </li>
  </ul>
  <h2 id="resources">Resources</h2>
  <ul>
    <li><a href="https://en.wikipedia.org/wiki/Data_structure" class="external-link" target="_blank">Data structure coverage in Wikipedia
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a> is no joke. Consider heading to Wikipedia when you have questions about data structures you are working with, or want to start learning about new ones.</li>
    <li><a href="http://visualgo.net/" class="external-link" target="_blank">VisuAlgo
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a> is an incredible sight with clean visualizations of all kinds of data structures and algorithms.</li>
    <li><a href="https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeExtend.js">functional instantiation example</a></li>
    <li><a href="https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePrototype.js">prototypal instantiation example</a></li>
    <li><a href="https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js">pseudoclassical instantiation example</a></li>
    <li><a href="https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeES6.js">es6 instantiation example</a></li>
    <li><a href="http://mdn.io/Object.create">Object.create</a></li>
    <li><a href="http://underscorejs.org/#extend">_.extend</a></li>
    <li><a href="http://visionmedia.github.io/mocha/" class="external-link" target="_blank">Mocha
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a></li>
    <li><a href="https://developers.google.com/web/tools/chrome-devtools/profile/rendering-tools/js-execution" class="external-link" target="_blank">Chrome profiling tools
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a></li>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="http://en.wikipedia.org/wiki/Stack_(abstract_data_type)">Stack</a></li>
    <li><a href="http://en.wikipedia.org/wiki/Queue_(abstract_data_type)">Queue</a></li>
    <li><a href="http://mdn.io/Array" class="external-link" target="_blank">Array
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a></li>
    <li><a href="http://mdn.io/Array#Methods_of_Array_instances" class="external-link" target="_blank">Array methods
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a></li>
    <li><a href="https://en.wikipedia.org/wiki/Linked_list">Linked List</a></li>
    <li><a href="http://en.wikipedia.org/wiki/Doubly_linked_list">Doubly Linked List</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Set_(abstract_data_type)">Set</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Tree_(data_structure)">Tree</a></li>
    <li><a href="http://en.wikipedia.org/wiki/Binary_search_tree">Binary Search Tree</a></li>
    <li><a href="http://en.wikipedia.org/wiki/Graph_(mathematics)">Graph</a></li>
    <li><a href="http://algs4.cs.princeton.edu/lectures/42DirectedGraphs.pdf" class="external-link" target="_blank">Graph Examples
        <svg class="svg">
          <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
        </svg>
      </a></li>
    <li><a href="https://en.wikipedia.org/wiki/Hash_tables">Hash Table</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Trie">prefixTree</a></li>
    <li><a href="http://en.wikipedia.org/wiki/B-tree">bTree</a></li>
    <li><a href="http://en.wikipedia.org/wiki/Red%E2%80%93black_tree">redBlackTree</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Adjacency_matrix">adjacencyMatrix</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Adjacency_list">adjacencyList</a></li>
    <li><a href="http://www.algolist.net/Algorithms/Graph/Undirected/Depth-first_search">depthFirstSearch</a></li>
    <li><a href="https://snap.stanford.edu/data/#socnets">largeDataSets</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Minimum_cut">minimumCut</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Karger%27s_algorithm">kargersAlgorithm</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm">kosarajusAlgorithm</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Strongly_connected_component">SCC</a></li>
  </ul>
</div>
