# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding..."

List.destroy_all
User.destroy_all
Nomination.destroy_all
Category.destroy_all
ListsNomination.destroy_all

u1 = User.create(username: 'Andy', password: 'andy', email: 'a@a.com')
u2 = User.create(username: 'Joe', password: 'joe', email: 'j@j.com')
u3 = User.create(username: 'Preston', password: 'preston', email: 'p@p.com')

c1 = Category.create(title: 'bands')
c2 = Category.create(title: 'movies')
c3 = Category.create(title: 'foods')


n1 = Nomination.create(name: 'Radiohead', category_id: c1.id, points: 9)
n2 = Nomination.create(name: 'Led Zeppelin', category_id: c1.id, points: 7)
n3 = Nomination.create(name: 'Grizzly Bear', category_id: c1.id, points: 4)
n4 = Nomination.create(name: 'The Beatles', category_id: c1.id, points: 2)
n5 = Nomination.create(name: 'Arcade Fire', category_id: c1.id, points: 1)
n6 = Nomination.create(name: 'Shawshank Redemption', category_id: c2.id, points: 4)
n7 = Nomination.create(name: 'Frozen', category_id: c2.id, points: 3)
n8 = Nomination.create(name: 'Big', category_id: c2.id, points: 2)
n9 = Nomination.create(name: 'Small', category_id: c2.id, points: 1)
n10 = Nomination.create(name: 'Palm Springs', category_id: c2.id, points: 5)
n12 = Nomination.create(name: 'French Fries', category_id: c3.id, points: 5)
n13 = Nomination.create(name: 'Burgers', category_id: c3.id, points: 4)
n14 = Nomination.create(name: 'Pizza', category_id: c3.id, points: 3)
n15 = Nomination.create(name: 'Pasta', category_id: c3.id, points: 2)
n11 = Nomination.create(name: 'Sushi', category_id: c3.id, points: 1)

l1 = List.create(user_id: u1.id, category_id: c1.id) 
l2 = List.create(user_id: u1.id, category_id: c2.id)
l3 = List.create(user_id: u2.id, category_id: c1.id)
l4 = List.create(user_id: u3.id, category_id: c3.id)

l1.lists_nominations.create([
    {nomination_id: n5.id, rank: 5}, 
    {nomination_id: n1.id, rank: 1}, 
    {nomination_id: n2.id, rank: 2}, 
    {nomination_id: n3.id, rank: 3}, 
    {nomination_id: n4.id, rank: 4} 
])

l2.lists_nominations.create([
    {nomination_id: n6.id, rank: 1}, 
    {nomination_id: n7.id, rank: 2}, 
    {nomination_id: n8.id, rank: 3}, 
    {nomination_id: n9.id, rank: 4}, 
    {nomination_id: n10.id, rank: 5} 
])

l3.lists_nominations.create([
    {nomination_id: n2.id, rank: 1}, 
    {nomination_id: n4.id, rank: 2}, 
    {nomination_id: n3.id, rank: 3}, 
    {nomination_id: n1.id, rank: 4}, 
    {nomination_id: n5.id, rank: 5} 
])

l4.lists_nominations.create([
    {nomination_id: n11.id, rank: 1}, 
    {nomination_id: n12.id, rank: 2}, 
    {nomination_id: n13.id, rank: 3}, 
    {nomination_id: n14.id, rank: 4}, 
    {nomination_id: n15.id, rank: 5} 
])
# l1.save
# l2.save
# l3.save
# l4.save

puts "Seeding complete!"