import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 15,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

class AddContact extends Component {
  state = {
    user: {
      name: '',
      email: '',
      phone: '',
      website: ''
    }
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  handleSubmit = e => {
    //alert('Form was submitted: ' + this.state.user.name);
    e.preventDefault();

    fetch('http://nodejs-contacts-service.azurewebsites.net/api/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.user.name,
        email: this.state.user.email,
        phone: this.state.user.phone,
        website: this.state.user.website
      })
    })
      .then(response => response.json().then(json => console.log(json)))
      .catch(error => console.log(error));

    // clear form, show message of submission of the form, empty state
  };

  render() {
    const { classes } = this.props;
    const {
      user: { name, email, phone, website }
    } = this.state;
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <ValidatorForm
              ref="form"
              onSubmit={e => this.handleSubmit(e)}
              onError={errors => console.log(errors)}
            >
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    value={name}
                    onChange={this.handleChange('name')}
                    fullWidth
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    label="Email"
                    onChange={this.handleChange('email')}
                    name="email"
                    fullWidth
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                      'this field is required',
                      'email is not valid'
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange('phone')}
                    label="Phone"
                    fullWidth
                    autoComplete="Enter Phone Number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="website"
                    name="website"
                    value={website}
                    onChange={this.handleChange('website')}
                    label="Website"
                    fullWidth
                    autoComplete="enter website address"
                  />
                </Grid>
                {/*
            <Grid item xs={12}>
              <TextField
                required
                id="test"
                name="test"
                label="test"
                fullWidth
                autoComplete="test"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
              */}
                <Grid item xs={12}>
                  <React.Fragment>
                    <div className={classes.buttons}>
                      <Button type="submit" variant="contained" color="primary">
                        Primary
                      </Button>
                    </div>
                  </React.Fragment>
                </Grid>
              </Grid>
            </ValidatorForm>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddContact);
