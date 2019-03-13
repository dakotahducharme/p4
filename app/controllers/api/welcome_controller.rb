class Api::WelcomeController < ApplicationController
  def index
  end

  def say_something
    render json: {data: 'something'}
  end

end
