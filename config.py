import os

basedir = os.path.abspath(os.path.dirname(__file__))
stripe_keys = {
	'secret_key': "sk_live_YOV6OPAltMYzJMAlhphY3Cm6",
	'publishable_key': "sk_live_YOV6OPAltMYzJMAlhphY3Cm6",
}

#-----------------------------------
# should be in cents
DEFAULT_CHARGE_AMOUNT = 525
DEFAULT_CHARGE_DESCRIPTION = "Flask Charge"
SECRET_KEY = 'my precious'
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'test.db ')

US_STATE_LIST = [('Select a State', ' Select a State '),('AK', ' Alaska '), ('AL', ' Alabama '), ('AR', ' Arkansas '), ('AS', ' American Samoa '),
                 ('AZ', ' Arizona '), ('CA', ' California '), ('CO', ' Colorado '), ('CT', ' Connecticut '),
                 ('DC', ' District of Columbia '), ('DE', ' Delaware '), ('FL', ' Florida '),
                 ('GA', ' Georgia '), ('GU', ' Guam '), ('HI', ' Hawaii '), ('IA', ' Iowa '), ('ID', ' Idaho '),
                 ('IL', ' Illinois '), ('IN', ' Indiana '), ('KS', ' Kansas '), ('KY', ' Kentucky '),
                 ('LA', ' Louisiana '), ('MA', ' Massachusetts '), ('MD', ' Maryland '), ('ME', ' Maine '),
                 ('MI', ' Michigan '), ('MN', ' Minnesota '), ('MO', ' Missouri '),
                 ('MP', ' Northern Mariana Islands '), ('MS', ' Mississippi '), ('MT', ' Montana '),
                 ('NA', ' National '), ('NC', ' North Carolina '), ('ND', ' North Dakota '),
                 ('NE', ' Nebraska '), ('NH', ' New Hampshire '), ('NJ', ' New Jersey '),
                 ('NM', ' New Mexico '), ('NV', ' Nevada '), ('NY', ' New York '), ('OH', ' Ohio '),
                 ('OK', ' Oklahoma '), ('OR', ' Oregon '), ('PA', ' Pennsylvania '), ('PR', ' Puerto Rico '),
                 ('RI', ' Rhode Island '), ('SC', ' South Carolina '), ('SD', ' South Dakota '),
                 ('TN', ' Tennessee '), ('TX', ' Texas '), ('UT', ' Utah '), ('VA', ' Virginia '),
                 ('VI', ' Virgin Islands '), ('VT', ' Vermont '), ('WA', ' Washington '), ('WI', ' Wisconsin '),
                 ('WV', ' West Virginia '), ('WY', ' Wyoming ')]
