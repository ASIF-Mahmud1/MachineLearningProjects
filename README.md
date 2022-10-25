# Machine Learning Cheatsheets

This page consist of all the commands and utility functions that I have learned while implementing Machine Learning Projects. 
Hope this helps!


# Conda Environment Commands

 1. **Create virtual environment from .yml file**

    conda env create -f environment.yml -n tensorflow
    conda env create --file environment.yml
	conda env create --file environment.yml --prefix ./env

 2. **Create virtual env in current directory :**
conda create --prefix ./machine ipython matplotlib

 3. **Initialze a kernel to use in  jupyter**

    python -m ipykernel install --user --name tensorflow --display-name "Python 3.6 (tensorflow)"

 4. **List all python  env :**
     conda info --envs 
     conda env list

 5. **Delete a python global env :**

    conda env remove -n env_name

 6. **Delete virtual env in current directory** 
conda env remove --prefix ./machine

 7. **Activate environment** 
conda activate ./machine
conda activate ./env

 8.  **Install library from a particular repository** 
   conda install --channel conda-forge kaggle=1.5.10  --prefix ./env
  

 9. **Create New Virtual env.**
 **example:** 
conda create --prefix ./env 
\python=3.6 
\matplotlib=3.1 \ 

 10. **List all libraries installed in an env.**
conda env export --prefix ./machine-learning-env 

 11. **Create .yml file that has all libraries of a virtual env**
conda env export --prefix ./machine-learning-env --file environment.yml

### Resources 

 1. https://carpentries-incubator.github.io/introduction-to-conda-for-data-scientists/03-using-packages-and-channels/index.html
 2. https://docs.conda.io/projects/conda/en/latest/_downloads/843d9e0198f2a193a3484886fa28163c/conda-cheatsheet.pdf
 