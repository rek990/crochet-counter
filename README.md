# Row Counter

Row Counter (formerly Crochet Counter) is a tool to help fiber artists (crocheters, knitters, rug makers, basket weavers, or anyone in need of a counting tool) keep track of the row they are on with a given project. Users can input a project name and the row number that they want the counter to start on, and the project and row count is displayed on the UI. From there, users can increment/decrement to keep an accurate count of where they are on a project. Additionally, users can save their work to later resume their row counting. Upon completion, users can log their project to be saved under their project history.

# Running App Locally

To view the code on this repo, clone and navigate into the project directory:

```sh
git clone git@github.com:username/crochet-counter.git
cd crochet-counter
```

# Backend

## Getting Started with Django

This project utilizes Django as the backend.

### Python 3 Virtual Environment

Create and activate a Python 3 virtual environment and then install all required packages.

```sh
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Install Django

Once the virtual environment is created and activated, install Django.

`python -m pip install Django`

### Start the Django Development Server

After Django is installed, navigate into the `row_counter_backend` directory, launch the server.

```sh
cd row_counter_backend
python manage.py runserver
```

# Frontend

From the main project directory (`crochet-counter`), install the required packages:

```sh
cd sat_frontend
npm install
```

To start the frontend development server:

`npm start`

The frontend server runs on [http://localhost:3000](http://localhost:3000).

# How to Use the App

## Entering Information

To enter project information, the user inputs the name of their project, along with the row they are starting/continuing their project on, and click "Submit Entry". The project's name and row count will appear on the UI.

![Submit Entry](https://github.com/rek990/crochet-counter/blob/initial-backend/RCDemoSubmitEntry20220730.gif)

## Increment/Decrement

Once a user has entered their information, they can increment and decrement their count by clicking the "+" and "-" `<button/>`'s, respectively.

![Increment/Decrement](https://github.com/rek990/crochet-counter/blob/initial-backend/RCDemoIncrement20220730.gif)

## Saving Work

Should a user stop their work during the course of their project, they have the option of saving their work to continue in the future.

![Retrieve Work](https://github.com/rek990/crochet-counter/blob/initial-backend/RCDemoRetrieveWork20220730.gif)

## Resuming Work and Making Updates

Once work is retrieved, the row counting resumes.

![Resume Work](https://github.com/rek990/crochet-counter/blob/initial-backend/RCDemoResumeCounting20220730.gif)

Once the user retrieves their saved data, they are able to update their row counts and then save the updated row counts to , keeping the row count on their project current.

![Update](https://github.com/rek990/crochet-counter/blob/initial-backend/RCDemoUpdateWork20220812.gif)

## Deleting Projects

Finally, if a user no longer wants to keep information on a given project, they can delete it.

![Delete](https://github.com/rek990/crochet-counter/blob/initial-backend/RCDemoDeleteWork20220815.gif)
