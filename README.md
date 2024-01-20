# fencedIn

fenced in is a site for a company meant to supply fences for `farmers`

## Things to do

- gallery to show work
- <strike>workers section</strike>
- proper testimonial
- proper arcodion
- mobile responsive

# Problems faced when working this project

- There was a problem which involved getting data from the `ourWorkers.json`file, to be displayed on the page.
   <br/> !notice: I mapped the data from the `.json` file into the page through `props`

  ***

  ## The code

  ```c
  {workerRecords && workerRecords
            ? workerRecords.map((record) => {
                return (
                  <>
                    <OurWorkers
                      key={record.id}
                      fName={record.fName}
                      lName={record.lName}
                      title={record.title}
                      image={record.imgLink}
                    />
                  </>
                );
              })
            : "noDataOnWorkers"}
  ```

  ```r
  {
    "id": 1,
    "fName": "Emmanuel",
    "lName": "Oluwabamise",
    "title": "CMO/Head of operations",
    "imgLink":"../workerImages/pic2.jpg"
  },
  ```

  - what happened was, the text information from the file was being displayed but the image wasn't.

    ## The solution

    I then discovered that there wasn't any problem with the `.jsx` file, but the link syntax.
    It needed to be accessed from the `source`

    ```c
     {
    "id": 1,
    "fName": "Emmanuel",
    "lName": "Oluwabamise",
    "title": "CMO/Head of operations",
    "imgLink":"src/public/workerImages/pic2.jpg"
    },
    ```
