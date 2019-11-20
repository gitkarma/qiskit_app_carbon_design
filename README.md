# Python Flask Hello World Sample

This application demonstrates a simple, reusable Python web application based on the [Flask microframework](http://flask.pocoo.org/).
The goal of this project consist to show a different approach to quantum computing resources.<br/>
We want add to the  [composer][], [jupyter notebook][] a [web app][] that make use of some algorithm in order to realize a visual and interactive application.
[composer]:https://quantumexperience.ng.bluemix.net/qx/editor
[jupyter notebook]:https://nbviewer.jupyter.org/github/Qiskit/qiskit-tutorial/blob/master/index.ipynb#1.3-Qiskit-Aer
[web app]: https://quantum-suite.mybluemix.net/

## The architecture 

## Algorithms and implemenation:
For this app we chose two different algorithms <br/>
1. **Generalized quantum emoticons**<br/>
   The base of this algorithm is well described in the [qiskit-tutorial quantum emoticons][]. In this app we generalized it extending the functionality to
   each couples of emoticons. The goal of this app is to show that is possible to write the information of 32 classical bits in just 16 qubit.
    
2. **Quantum state tomography**<br/>
   This algorithm it's defined inside the *ibm quantum experience* [User guide][], it consist to perform measurement of the quantum state on all the three basis (x,y,z)
   in order to reconstruct the qunatum state on the block-sphere. In order to make this algorithm fully visual we utilized the python library [qutip][] that allows 
   to perform analytical calculation and build the block sphere.<br/>
   We decided to offer two different prospectives giving two bloch-spheres, one to show the QST performance and another one to show the analytical calculation, in order to
   give evidence of the errors coming from dechoerence/noise generated from the real device or from the configured noise-simulator.

[qiskit-tutorial quantum emoticons]:https://github.com/Qiskit/qiskit-tutorials/blob/master/community/hello_world/quantum_emoticon.ipynb
[User guide]:https://quantumexperience.ng.bluemix.net/qx/tutorial?sectionId=full-user-guide&page=002-The_Weird_and_Wonderful_World_of_the_Qubit~2F005-The_Bloch_Sphere
[qutip]:http://qutip.org/
## Run the app locally

### using pip
1. [Install Python][]
1. cd into this project's root directory
1. Run `$pip install -r requirements.txt` to install the app's dependencies
2. Type `$python welcome.py ` from your prompt to run the app
1. Access the running app in a browser at <http://localhost:5000>

### using conda
1. cd into the project's root directory
2. create the conda-env `$conda env create -f environment.yml`
3. Type `$python welcome.py ` from your prompt to run the app
4. Access the running app in a browser at <http://localhost:5000>

[Install Python]: https://www.python.org/downloads/

## Run app on IBM Cloud Foundry

1. Download this repository
2. Connect and log in to [IBM Cloud][]
3. Redeploy your app to IBM Cloud by using the `bluemix app push `

### Find the right buildpack
Remember to check if the python version needed for your app is present in the
[default buildpack](https://console.bluemix.net/docs/runtimes/python/index.html#python_runtime). <br/>
If it doesn't let's try to use an external one <https://docs.cloudfoundry.org/buildpacks/python/index.html> <br/>
using the syntax:<br/>
 `bluemix app push <yourapp> -b https://github.com/cloudfoundry/python-buildpack.git`

[IBM Cloud]: https://www.ibm.com/cloud/
