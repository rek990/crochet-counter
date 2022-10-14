# Row Counter

Row Counter (formerly Crochet Counter) is a tool to help fiber artists (crocheters, knitters, rug makers, basket weavers, or anyone in need of a counting tool) keep track of the row they are on with a given project. Users can input a project name and the row number that they want the counter to start on, and the project and row count is displayed on the UI. From there, users can increment/decrement to keep an accurate count of where they are on a project. Additionally, users can save their work to later resume their row counting. Upon completion, users can log their project to be saved under their project history.

# Running App Locally

To view the code on this repo, clone and navigate into the project directory:

```sh
git clone git@github.com:rek990/crochet-counter.git
cd crochet-counter
```

For environment variables, ensure that `ROW_CTR_SECRET_KEY="testing_local_dev"`

# Backend

## Getting Started with Django

This project utilizes Django as the backend.

### Python 3 Virtual Environment

Within the project directory (`crochet-counter`), create and activate a Python 3 virtual environment and then install all required packages.

```sh
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Start the Django Development Server

After Django is installed and the virtual environemnt is active, navigate into the `row_counter_backend` directory, and launch the server.

```sh
cd row_counter_backend
python manage.py runserver
```

The backend server is accessible via [http://localhost:8000/row-counter/rctr/](http://localhost:8000/row-counter/rctr/). Initially, you will see an empty array that will later be populated with objects that hold all relevant information about a project.

# Frontend

From the main project directory (`crochet-counter`), install the required package:

`
npm install
`

To start the frontend development server:

`npm start`

The frontend server runs on [http://localhost:3000](http://localhost:3000).

# How to Use the App

## Entering Information

To enter project information, the user inputs the name of their project, along with the row they are starting/continuing their project on, and click "Submit Entry". The project's name and row count will appear on the UI.

![Submit Entry](https://github.com/rek990/crochet-counter/blob/main/RCDemoSubmitEntry20220730.gif)

## Increment/Decrement

Once a user has entered their information, they can increment and decrement their count by clicking the "+" and "-" `<button/>`'s, respectively.

![Increment/Decrement](https://github.com/rek990/crochet-counter/blob/main/RCDemoIncrement20220730.gif)

## Saving and Resuming Work

Should a user stop their work during the course of their project, they have the option of saving their work to continue in the future.

![Retrieve Work](https://github.com/rek990/crochet-counter/blob/main/RCDemoRetrieveWork20220730.gif)

Once work is retrieved, the row counting resumes.

![Resume Work](https://github.com/rek990/crochet-counter/blob/main/RCDemoResumeCounting20220730.gif)

## Resuming Work and Making Updates

Once the user retrieves their saved data and updates their row counts, they can save the updated row count, keeping the row count on their project current.

![Update](https://github.com/rek990/crochet-counter/blob/main/RCDemoUpdateWork20220812.gif)

## Deleting Projects

Finally, if a user no longer wants to keep information on a given project, they can delete it.

![Delete](https://github.com/rek990/crochet-counter/blob/main/RCDemoDeleteWork20220815.gif)
