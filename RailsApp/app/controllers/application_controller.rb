class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.


  #protect_from_forgery with: :exception

  #TOKEN CSRF
  skip_before_filter :protect_from_forgery

  ###########Resolve Access-Control-Allow-Origin
  #before_filter :set_access_control_headers
  #def set_access_control_headers
  #  headers['Access-Control-Allow-Origin'] = 'http://localhost:9090' #can be * for any
  #  headers['Access-Control-Request-Method'] = %w{GET POST OPTIONS}.join(",") # can be * for any
  #end
  ################  no need cros do the job




end
