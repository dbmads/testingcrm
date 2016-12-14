from flask_wtf import Form

from wtforms import TextField, StringField,SelectField,HiddenField,SubmitField
from wtforms.validators import DataRequired, Length, Email
from wtforms.fields.html5 import EmailField, IntegerField
from wtforms import StringField, validators
from wtforms.widgets import Input
from config import US_STATE_LIST


class CustomInput(Input):
    input_type = None

    def __init__(self, input_type=None, **kwargs):
        self.params = kwargs
        super(CustomInput, self).__init__(input_type=input_type)

    def __call__(self, field, **kwargs):
        for param, value in self.params.iteritems():
            kwargs.setdefault(param, value)
        return super(CustomInput, self).__call__(field, **kwargs)


class CustomTextInput(CustomInput):
    input_type = 'text'



class LeadForm(Form):


    email = StringField('Email', validators=[DataRequired("Email is required"), Length(min=3, max=25), Email()],render_kw={"class": "required email","placeholder":"Enter Email"})
    firstName = StringField('First Name',validators=[DataRequired("First name is required"), Length(min=2, max=30)],render_kw={"class":"required",'placeholder':'Enter First Name'})
    lastName = StringField('Last Name',  validators=[DataRequired("Last name is required"), Length(min=2, max=30)],render_kw={"class":"required",'placeholder':'Enter Last Name'})
    address = StringField('Address', validators=[DataRequired("Address is required"), Length(min=10, max=255)],render_kw={"class":"required",'placeholder':'Enter Address'})
    city = StringField('City', validators=[DataRequired("City is required"), Length(min=1, max=55)],render_kw={"class":"required",'placeholder':'Enter City Name'})
    phone = IntegerField('Phone Number', validators=[DataRequired("Zip code is required"), Length(min=10,max=12)],render_kw={"class":"required ","placeholder":"Enter a Phone Number"})
    zip = IntegerField('Zip Code', validators=[DataRequired("Zip code is required"), Length(min=5,max=5)],render_kw={"class":"required ","placeholder":"Enter Zipcode"})

    state = SelectField('State', validators=[DataRequired("State is required"),Length(min=2,max=2)], choices=US_STATE_LIST,render_kw={"class":"required width_178",'placeholder':'Enter State', 'value':'Select a State'})

    country = HiddenField('Country', validators=[DataRequired("Country is required")])
    submit_button = SubmitField("",render_kw={'id':'submit_button','style':'margin-top:10px;'})
    c1 = HiddenField('C1')
    c2 = HiddenField('C2')
    c3 = HiddenField('C3')





class PaymentForm(Form):
    number = StringField('Credit Card Number',validators=[DataRequired("Credit Card is required"), Length(min=14, max=17)])
    exp_month = SelectField('', validators=[DataRequired()],choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11'), ('12', '12')])
    exp_year = SelectField('', validators=[DataRequired()], choices=[('2012', '2012'), ('2013', '2013'), ('2014', '2014'), ('2015', '2015'), ('2016', '2016'), ('2017', '2017'), ('2018', '2018')])
    cvc = IntegerField('CVC',validators=[DataRequired("CVV is required"), Length(min=3, max=3)])
    stripeToken = HiddenField(validators=[])