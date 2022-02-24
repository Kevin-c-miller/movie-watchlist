class Movie < ApplicationRecord
  belongs_to :user
  belongs_to :watch_list
  has_many :reviews, dependent: :destroy
end
