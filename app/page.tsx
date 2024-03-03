'use client'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import {
  AppBar,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material'

import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    pdpa: false,
    gender: 'Male',
    hobby: {
      Game: false,
      Music: false,
      Craft: false,
      Reading: false,
    },
    status: '',
    note: '',
  })
  const [dataList, setDataList] = useState([{} as typeof data])

  const handleSummit = (summit: any) => {
    summit.preventDefault()
    setDataList((prev) => [...prev, data])
  }
  const handleReset = () => {
    const resetData: typeof data = {
      fname: '',
      lname: '',
      email: '',
      pdpa: false,
      gender: 'Male',
      hobby: {
        Game: false,
        Music: false,
        Craft: false,
        Reading: false,
      },
      status: '',
      note: '',
    }
    setData((prev) => resetData)
  }
  const handleRemove = (userIndex: number) => {
    const list = dataList.filter((value, index) => index !== userIndex)
    setDataList((prev) => list)
  }
  return (
    <Box
      sx={{
        bgcolor: '#F8F8F8',
        paddingBottom: '30px',
      }}
    >
      {/* Header */}
      <AppBar
        position="sticky"
        sx={{
          padding: '5px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3">User profile management System</Typography>
      </AppBar>

      {/* Component */}
      <Grid container sx={{ marginTop: '30px' }}>
        {/* Form */}
        <Grid item xs={12} md={5}>
          <Typography align="center" marginBottom="25px" variant="h4">
            Profile management
          </Typography>
          <Container maxWidth="lg">
            <Card variant="elevation">
              <Box
                sx={{
                  margin: '15px',
                }}
              >
                <form onSubmit={handleSummit}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={data.fname}
                        onChange={(even) => {
                          setData((prev) =>({
                            ...prev,
                            fname: even.target.value,
                          }))
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Last name"
                        variant="outlined"
                        value={data.lname}
                        onChange={(even) => {
                          setData((prev) =>({
                            ...prev,
                            lname: even.target.value,
                          }))
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={data.email}
                        onChange={(even) => {
                          setData((prev) =>({
                            ...prev,
                            email: even.target.value,
                          }))
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={data.pdpa}
                              onChange={(even) => {
                                setData((prev) =>({
                                  ...prev,
                                  pdpa: even.target.checked,
                                }))
                              }}
                            />
                          }
                          label="Confirm PDPA"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Gender
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          onChange={(even) => {
                            setData((prev) =>({
                              ...prev,
                              gender: even.target.value,
                            }))
                          }}
                          value={data.gender}
                        >
                          <FormControlLabel
                            value="Male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="Female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="Etc"
                            control={<Radio />}
                            label="Etc"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl>
                        <FormLabel sx={{ display: 'block' }}>Hobby</FormLabel>
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={data.hobby.Game}
                                onChange={(even) => {
                                  setData((prev) =>({
                                    ...prev,
                                    hobby: {
                                      ...prev.hobby,
                                      Game: even.target.checked,
                                    },
                                  }))
                                }}
                              />
                            }
                            label="Game"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={data.hobby.Music}
                                onChange={(even) => {
                                  setData((prev) =>({
                                    ...prev,
                                    hobby: {
                                      ...prev.hobby,
                                      Music: even.target.checked,
                                    },
                                  }))
                                }}
                              />
                            }
                            label="Music"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={data.hobby.Craft}
                                onChange={(even) => {
                                  setData((prev) =>({
                                    ...prev,
                                    hobby: {
                                      ...prev.hobby,
                                      Craft: even.target.checked,
                                    },
                                  }))
                                }}
                              />
                            }
                            label="Craft"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={data.hobby.Reading}
                                onChange={(even) => {
                                  setData((prev) =>({
                                    ...prev,
                                    hobby: {
                                      ...prev.hobby,
                                      Reading: even.target.checked,
                                    },
                                  }))
                                }}
                              />
                            }
                            label="Reading"
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          value={data.status}
                          onChange={(even: any) => {
                            setData((prev) =>({
                              ...prev,
                              status: even.target.value,
                            }))
                          }}
                        >
                          <MenuItem value="Single">Single</MenuItem>
                          <MenuItem value="Married">Married</MenuItem>
                          <MenuItem value="Divorce">Divorce</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Note"
                        variant="outlined"
                        value={data.note}
                        onChange={(even) => {
                          setData((prev) =>({
                            ...prev,
                            note: even.target.value,
                          }))
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'end',
                          margin: '0',
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{ marginRight: '15px' }}
                          onClick={handleReset}
                        >
                          RESET
                        </Button>
                        <Button variant="contained" onClick={handleSummit}>
                          SUBMIT
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Card>
          </Container>
        </Grid>
        {/* Card form */}
        <Grid item xs={12} md={7}>
          {dataList.map((value, index) => {
            if (index == 0) {
              return <></>
            }
            return (
              <Container
                key={index}
                maxWidth="lg"
                sx={{
                  marginBottom: '25px',
                }}
              >
                <Card variant="elevation">
                  <Box sx={{ padding: '20px' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: '500',
                        }}
                      >
                        {`USER ${index}`}
                      </Typography>
                      <IconButton
                        aria-label="delete"
                        size="medium"
                        sx={{
                          position: 'absolute',
                          right: '40px',
                        }}
                        onClick={() => handleRemove(index)}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Box>

                    <Grid container>
                      <Grid item xs={6} marginTop="5px">
                        <Typography>
                          Name:
                          {value.fname === '' && value.lname === ''
                            ? ' - '
                            : ` ${value.fname} ${value.lname}`}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} marginTop="5px">
                        <Typography>Email: {value.email || ' - '} </Typography>
                      </Grid>
                      <Grid item xs={6} marginTop="5px">
                        <Typography>
                          Gender: {value.gender || ' - '}{' '}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} marginTop="5px">
                        <Typography>
                          Hobby:
                          {Object.keys(value.hobby)
                            .map((key) => {
                              const ObjectKey: keyof typeof value.hobby =
                                key as keyof typeof value.hobby
                              if (value.hobby[ObjectKey] === true) {
                                return key
                              }
                            })
                            .filter((x) => x !== undefined)
                            .toString() || ' - '}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} marginTop="5px">
                        <Typography>
                          Status: {value.status || ' - '}{' '}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} marginTop="5px">
                        <Typography>Note: {value.note || ' - '} </Typography>
                      </Grid>
                    </Grid>
                    <FormControlLabel
                      control={<Checkbox checked={value.pdpa} disabled />}
                      label="Confirm PDPA"
                      sx={{
                        marginTop: '5px',
                      }}
                    />
                  </Box>
                </Card>
              </Container>
            )
          })}
        </Grid>
      </Grid>
    </Box>
  )
}
