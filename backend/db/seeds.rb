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

u1 = User.create(username: 'Andy', password: 'andy', email: 'a@a.com')
u2 = User.create(username: 'Joe', password: 'joe', email: 'j@j.com')
u3 = User.create(username: 'Preston', password: 'preston', email: 'p@p.com')

c1 = Category.create(title: 'Bands')
c2 = Category.create(title: 'Movies')
c3 = Category.create(title: 'Foods')


n1 = Nomination.create(name: 'Radiohead', category_id: c1.id)
n2 = Nomination.create(name: 'Led Zeppelin', category_id: c1.id)
n3 = Nomination.create(name: 'Grizzly Bear', category_id: c1.id)
n4 = Nomination.create(name: 'The Beatles', category_id: c1.id)
n5 = Nomination.create(name: 'Arcade Fire', category_id: c1.id)
n6 = Nomination.create(name: 'Shawshank Redemption', category_id: c2.id)
n7 = Nomination.create(name: 'Frozen', category_id: c2.id)
n8 = Nomination.create(name: 'Big', category_id: c2.id)
n9 = Nomination.create(name: 'Small', category_id: c2.id)
n10 = Nomination.create(name: 'Palm Springs', category_id: c2.id)
n12 = Nomination.create(name: 'French Fries', category_id: c3.id)
n13 = Nomination.create(name: 'Burgers', category_id: c3.id)
n14 = Nomination.create(name: 'Pizza', category_id: c3.id)
n15 = Nomination.create(name: 'Pasta', category_id: c3.id)
n11 = Nomination.create(name: 'Sushi', category_id: c3.id)

l1 = List.create(user_id: u1.id, category_id: c1.id, first: n1.id, second: n2.id, third: n3.id, fourth: n4.id, fifth: n5.id)
l2 = List.create(user_id: u1.id, category_id: c2.id, first: n10.id, second: n6.id, third: n7.id, fourth: n8.id, fifth: n9.id)
l3 = List.create(user_id: u2.id, category_id: c1.id, first: n5.id, second: n4.id, third: n3.id, fourth: n2.id, fifth: n1.id)
l4 = List.create(user_id: u3.id, category_id: c3.id, first: n11.id, second: n12.id, third: n13.id, fourth: n14.id, fifth: n15.id)

puts "Seeding complete!"