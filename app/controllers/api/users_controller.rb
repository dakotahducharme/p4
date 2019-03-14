class Api::UsersController < ApplicationController
  def create 
    @user = User.create(user_params)
    render json: @user
  end

  def update 
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
  end

  def login
    @user = User.find_by(username: params[:user][:username], password: params[:user][:password])
    if @user 
      render json: @user
    else
      render text: "Invalid Login", status: 400
    end
  end

  def delete
    @user = User.find(params[:id])
    @user.destroy
    render text: "Successfully deleted user"
  end

  private 
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
