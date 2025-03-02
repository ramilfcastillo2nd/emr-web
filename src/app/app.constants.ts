export const ERR_AUTH_CODE_MSG = {
	1000: 'The email and/or password you entered do not match our records.', // Error logging in. Username and password not found.
	1001: 'User is not active', //Error logging in. User is not active. 
	1002: 'Deactivated / Unlicensed user', //Error logging in. Deactivated / Unlicensed user.
	1003: 'Account has been locked. Please contact your administrator.', //Error logging in. Account has been locked. Please contact your administrator.
	1004: 'Email has not been confirmed.', //Error logging in. Email has not been confirmed.
	1005: 'Unlicensed user', //Error logging in. Unlicensed user.
    401: 'Unauthorized access',
    404: 'Resource not found',
}

export const ERR_FORM_MSG = {
	REQUIRED: 'This is a required field.',
	INVALID_EMAIL: 'This is not a valid email.',
	DATE:{
		INVALID_DATE: 'Invalid date.',
		END_DATE:{
			SHOULD_AFTER_START_DATE: "End date should be after start date.",
			MORE_THAN_TERM_END: "End date should not be before firm term end."
		}		
	},
	INVALID_LOGIN : 'The email and/or password you entered do not match our records.',
	UNCONFIRMED_EMAIL : 'This is not a registered account.'
}