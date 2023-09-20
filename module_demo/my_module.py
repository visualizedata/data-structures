import numpy as np
'''This is my simple regression module'''

class SimpleRegression():
    '''Fits OLS simple regression'''
    
    def __init__(self):
        '''Initialize attributes'''
        self.intercept_ = False
        self.coef_ = False
    
    def get_b(self, X, Y):
        '''Calculate the coefficient / slope'''
        Xbar = np.average(X)
        Ybar = np.average(Y)
        X_minus_Xbar = np.subtract(X, [Xbar])
        Y_minus_Ybar = np.subtract(Y, [Ybar])
        X_minus_Xbar_squared = np.power(X_minus_Xbar, 2)
        sum_X_minus_Xbar_times_Y_minus_Ybar = np.vdot(X_minus_Xbar, Y_minus_Ybar)
        sum_X_minus_Xbar_squared = np.sum(X_minus_Xbar_squared)
        b = sum_X_minus_Xbar_times_Y_minus_Ybar / sum_X_minus_Xbar_squared
        return b

    def get_a(self, X, Y):
        '''Calculate the intercept'''
        Xbar = np.average(X)
        Ybar = np.average(Y)
        a = Ybar - self.get_b(X, Y) * Xbar
        return a
    
    def fit(self, X, Y):
        '''Fit the OLS model'''
        self.intercept_ = self.get_a(X, Y)
        self.coef_ = self.get_b(X, Y)
        
    def predict(self, X):
        '''Predict Y'''
        '''Return an array of the predicted values for X based on the model you fit'''
        return np.add([self.intercept_], np.multiply([self.coef_], X))