require 'rails_helper'

RSpec.describe Post, type: :model do
  it 'should be valid' do
    expect(build(:post)).to be_valid
  end
end
